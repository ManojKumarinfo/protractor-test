describe('angularjs homepage todo list', function() {
  it('Validating features and Benefits label in angular page', async function() {
    browser.get('https://angular.io');
    browser.sleep(3000);
    element.all(by.css('.nav-link-inner')).get(0).click();
    browser.sleep(5000); 
        const crossPlatformText = await element.all(by.css('.feature-header')).get(0).getText();
        expect(crossPlatformText).toEqual('CROSS PLATFORM');
        const sapText = await element.all(by.css('.feature-header')).get(1).getText();
        expect(sapText).toEqual('SPEED AND PERFORMANCE');
  });

  it('Validating features and Benefits label in angular second page', async function() {
    const prodText = element.all(by.css('.feature-header')).get(2).getText();
    expect(prodText).toEqual('PRODUCTIVITY');
    const fdsText = element.all(by.css('.feature-header')).get(3).getText();
    expect(fdsText).toEqual('FULL DEVELOPMENT STORY');
    browser.sleep(2000);
});
  it('Navigating to singleton service page and validating the label', async function() {
    // Searching for a service
    element(by.className('search-container')).click();
    browser.sleep(10000);
    await element(by.tagName('input')).sendKeys('service');
    browser.sleep(2000);
    // Asserting Required Service
    const singletonService=element.all(by.css('.search-result-item')).get(36).getText();
    expect(singletonService).toEqual('Singleton services');
    element.all(by.css('.search-result-item')).get(36).click();
    browser.sleep(8000);
    // Validating the Service with the URL
    const singletonServicelabel=await element(by.id('singleton-services')).getText();
    browser.sleep(3000);
    const lowerCase = singletonServicelabel.toLowerCase();
    console.log('----------------------------');
    console.log(lowerCase);
    const currentUrl = await browser.driver.getCurrentUrl();
    browser.sleep(3000);
    console.log('-------------------------');
    console.log(currentUrl);
    const splittedUrl = await currentUrl.split('https://angular.io/guide/')[1].trim();
    browser.sleep(3000);
    console.log(splittedUrl);
    const insert = "-";
    const position = "9";
    var concUrl = await [lowerCase.slice(0, position),insert,lowerCase.slice(10)].join('');
    browser.sleep(3000);
    console.log(concUrl);
    expect(concUrl).toEqual('singleton-services');
});  
});



