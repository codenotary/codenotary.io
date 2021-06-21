import os
from selenium import webdriver
from selenium.common.exceptions import WebDriverException
import logging
import requests


def before_all(context):
    if not context.config.log_capture:
        logging.basicConfig(level=logging.DEBUG)
    download_dir = os.environ.get('DOWNLOAD_DIR', "/work")
    logging.info("Found all environment variables, attaching to selenium-hub")
    options = webdriver.ChromeOptions()
    options.add_argument("--disable-gpu")
    options.add_experimental_option("prefs", {
        "download.default_directory": download_dir,
        "download.prompt_for_download": False,
    })
    capabilities = options.to_capabilities()
    capabilities['acceptSslCerts'] = True
    capabilities['acceptInsecureCerts'] = True
    selenium_hub = os.environ.get('SELENIUM_HUB', 'http://selenium-hub:4444/wd/hub')
    context.browser = webdriver.Remote(selenium_hub, desired_capabilities=capabilities)
    context.browser.implicitly_wait(10)
    context.driver = context.browser

def before_scenario(context, scenario):
    # Clear local storage
    try:
        context.driver.execute_script("window.localStorage.clear();")
    except WebDriverException:
        logging.info("Attempted to clear localStorage before it's created, suppressing exception")
    context.logged_in = False


def after_step(context, step):
    if 'SCREENSHOT_ON_FAIL' in os.environ and os.getenv("SCREENSHOT_ON_FAIL").lower() == 'true':
        if step.status == "failed":
            context.browser.save_screenshot("reports/screenshots/" + context.scenario.name + " " + step.name + ".png")


def after_all(context):
    context.browser.quit()
