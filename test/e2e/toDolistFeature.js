describe('To Do List', function() {
    var itemField = element(by.model('listCtrl.toDoItem'));
    var addButton = element(by.className('butn'));
    var listDisplay = element(by.model('listCtrl.list'));

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
        expect(listDisplay.getText()).toBe('add more tests add protactor tests');
    });
});
