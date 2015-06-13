describe('To Do List', function() {
    var itemField = element(by.model('listCtrl.toDoItem'));
    var addButton = element(by.className('butn'));
    var listDisplay = element(by.model('listCtrl.list'));
    var listItems = element.all(by.repeater('item in listCtrl.list'));

    beforeEach(function(){
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
});
