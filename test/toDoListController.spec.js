describe('toDoController', function() {
    beforeEach(module('toDo'));

    var ctrl;

    beforeEach(inject(function($controller) {
        ctrl = $controller('toDoController');
    }));

    beforeEach(function() {
        angular.module("xeditable", []);
    });

    it('initialises with an empty list', function(){
        expect(ctrl.list).toBeUndefined();
    });

    it('adding an item to the list', function() {
        ctrl.toDoItem = 'write more tests';
        ctrl.addItem();
        expect(ctrl.list).toEqual(['write more tests']);
    });

    it('can add two items to the list', function() {
        ctrl.toDoItem = 'write more tests';
        ctrl.addItem();
        ctrl.toDoItem = 'write even more tests';
        ctrl.addItem();
        expect(ctrl.list).toEqual(['write more tests', 'write even more tests']);
    });


});
