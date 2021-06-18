import os


class BasePage(object):
    # From docker-compose
    

    def __init__(self, context):
        self.URL = os.getenv("SITE_URL")
        self.driver = context.driver

    def open(self):
        print("Opening {}".format(self.URL))
        self.driver.get(self.URL)

    def find_element(self, *locator):
        return self.driver.find_element(*locator)

    def get_title(self):
        return self.driver.title

    def get_url(self):
        return self.driver.current_url
