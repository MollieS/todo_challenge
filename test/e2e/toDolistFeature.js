describe('To Do List', function() {
    var itemField = element(by.model('toDoItem'));
    var addButton = element(by.className('butn'));
    var listDisplay = element(by.model('list'));

    beforeEach(function(){
        browser.get('http://localhost:8080');
    });

    it('has a title', function() {
        expect(browser.getTitle()).toEqual('To Do List')
    });

    it('displays the list', function() {
        itemField.sendKeys('add more tests');
        addButton.click();
        expect(listDisplay).toEqual('add more tests');
    });
});
