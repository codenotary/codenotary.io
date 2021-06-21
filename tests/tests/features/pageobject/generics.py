#!/usr/bin/env python
from selenium.webdriver import ActionChains
from selenium.webdriver.common.by import By
from selenium.webdriver.support.wait import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC


class Generics:
    GENERIC_BUTTON_LOCATOR = "//button/*[text()[normalize-space() = '{}'] and not(ancestor::div[contains(@style,'display:none')]) and not(ancestor::div[contains(@style,'display: none')])]"
    GENERIC_LABEL_LOCATOR = "//label[text() = '{}']"
    GENERIC_SPAN_LOCATOR = "//span[contains(text(),'{}')]"
    GENERIC_LABELED_INPUT_LOCATOR = "//div[label[contains(text(), '{}')]]/input"

    @classmethod
    def click_button(cls, context, selector):
        button = context.driver.find_element_by_xpath(selector)
        wait = WebDriverWait(context.driver, 10)
        actions = ActionChains(context.driver)
        actions.move_to_element(button)
        temp = wait.until(EC.element_to_be_clickable((By.XPATH, selector)))
        actions.click(button)
        actions.perform()

    @classmethod
    def fill_label(cls, context, label, value):
        element_xpath = Generics.GENERIC_LABEL_LOCATOR.format(label)
        wait = WebDriverWait(context.browser, 10)
        temp = wait.until(EC.element_to_be_clickable((By.XPATH, element_xpath)))
        label_element = context.browser.find_element_by_xpath(element_xpath)
        for_attr = label_element.get_attribute('for')
        input_element = context.browser.find_element_by_css_selector("#{}".format(for_attr))
        actions = ActionChains(context.browser)
        actions.move_to_element(input_element)
        actions.click(input_element)
        actions.send_keys(value)
        actions.perform()

    @classmethod
    def get_generic_span(cls, context, text):
        return context.browser.find_element_by_xpath(Generics.GENERIC_SPAN_LOCATOR.format(text))

    @classmethod
    def get_labeled_input(cls, context, label_text):
        return context.browser.find_element_by_xpath(Generics.GENERIC_LABELED_INPUT_LOCATOR.format(label_text))

    @classmethod
    def fill_labeled_input(cls, context, label, input):
        elem = Generics.get_labeled_input(context, label)
        wait = WebDriverWait(context.browser, 10)
        temp = wait.until(EC.element_to_be_clickable((By.XPATH, Generics.GENERIC_LABELED_INPUT_LOCATOR.format(label))))
        actions = ActionChains(context.browser)
        actions.click(elem)
        actions.send_keys(input)
        actions.perform()
    
    @classmethod
    def get_all_hrefs(cls, context):
        return context.browser.find_elements_by_xpath("//a[@href]")

