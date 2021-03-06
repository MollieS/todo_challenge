describe('To Do List', function() {
  var itemField = element(by.model('listCtrl.toDoItem'));
  var addButton = element(by.className('butn'));
  var listDisplay = element(by.model('listCtrl.list'));
  var listItems = element.all(by.repeater('item in listCtrl.list'));

  beforeEach(function() {
    browser.get('http://localhost:8080');
  });

  it('has a title', function() {
    expect(browser.getTitle()).toEqual('To Do List')
  });

  it('displays the list', function() {
    itemField.sendKeys('add more tests');
    addButton.click();
    itemField.sendKeys('add protractor tests');
    addButton.click();
    expect(listItems.get(0).getText()).toBe('add more tests');
    expect(listItems.get(1).getText()).toBe('add protractor tests');
  });

  it('can edit items in the list', function() {
    itemField.sendKeys('add tests');
    addButton.click();
    element(by.className('items')).click();
    element(by.model('$data')).sendKeys(' more')
    element(by.css('.editable-buttons button')).click()
    expect(listItems.get(0).getText()).toBe('add tests more');
  });

  it('can tick items off', function() {
    itemField.sendKeys('add tests');
    addButton.click();
    element(by.className('done')).click();
    expect(element(by.className('done')).isSelected()).toBeTruthy();
  });

  it('can filter items by completed', function() {
    itemField.sendKeys('add filter');
    addButton.click();
    itemField.sendKeys('filter');
    addButton.click()
    element(by.className('done')).click();
    element(by.className('completed')).click();
    expect(listItems.get(0).getText()).toBe('add filter')
  });

  it('can filter by active', function() {
    itemField.sendKeys('add filter');
    addButton.click();
    itemField.sendKeys('filter');
    addButton.click()
    element(by.className('done')).click();
    element(by.className('active')).click();
    expect(listItems.get(0).getText()).toBe('filter')
  });

  xgit('can see a count of items', function() {
    itemField.sendKeys('add count');
    addButton.click();
    expect(element(by.className('counter'))).toContain('1')
  });
});