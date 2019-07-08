describe('google search page', function() {

	it('giving input data in the search field', async function() {
    browser.get('https://angular.io');
    browser.sleep(5000);
    element(by.className('search-container')).click();
    browser.sleep(8000);
    await element(by.className('search-container')).sendKeys('service');
    browser.sleep(5000);
    // element(by.className('search-container')).click();
    // browser.sleep(8000);
    // await element(by.tagName('input')).sendKeys('service');
    // browser.sleep(2000);
  });

 });