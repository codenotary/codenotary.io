from behave import *
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.common.by import By
from features.pageobject.generics import Generics
from features.pageobject.base_page import BasePage
import logging
import requests



@when('I fill in "{label}" with "{value}"')
def fill_in(context, label, value):
    Generics.fill_label(context, label, value)


@when('I click the button "{text}"')
def step_impl(context, text):
    Generics.click_button(context, Generics.GENERIC_BUTTON_LOCATOR.format(text))


@given('I am in the main page')
def step_impl(context):
    context.main_page = BasePage(context)
    context.main_page.open()


@given('I open the url "{url}"')
def step_impl(context, url):
    if not 'http' in url:
        context.browser.get(BasePage.URL+url)
    else:
        context.browser.get(url)


@given('I click on link to "{url}"')
def step_impl(context, url):
    element_xpath = "//a[@href='{}']".format(url)
    wait = WebDriverWait(context.browser, 10)
    temp = wait.until(EC.element_to_be_clickable((By.XPATH, element_xpath)))
    l = context.browser.find_element_by_xpath(element_xpath)
    l.click()

@when('I click on all links')
def step_impl(context):
    refs = Generics.get_all_hrefs(context)
    context.relative_refs = []
    context.absolute_refs = []
    context.unknown_refs = []
    context.is_link_failed = False
    context.failed_links = []
    if refs:
        for ref in refs:
            try:
                ref_path = ref.get_attribute('href')
                if 'http' in ref_path:
                    context.absolute_refs.append(ref)
                elif '/' in ref_path:
                    context.relative_refs.append(ref)
                else:
                    context.unknown_refs.append(ref)
            except Exception as e:
                logging.warning(e)
                # for debugging still
    current_url = context.driver.current_url
    for rref in context.relative_refs:
        if not requests.get(current_url + ref.get_attribute('href')).ok:
            context.failed_links.append(ref.get_attribute('href'))
            context.is_link_failed = True
        else:
            logging.debug("Checked {} and got OK response".format(rref.get_attribute('href')))

    for aref in context.absolute_refs:
        if not requests.get(aref.get_attribute('href')).ok:
            context.failed_links.append(ref.get_attribute('href'))
            context.is_link_failed = True
        else:
            logging.debug("Checked {} and got OK response".format(aref.get_attribute('href')))

@Then('all clicked links should work')
def step_impl(context):
    assert len(context.failed_links) == 0, "found broken links {}".format(context.failed_links)
    context.relative_refs = []
    context.absolute_refs = []
    context.unknown_refs = []
    context.is_link_failed = False
    context.failed_links = []
    