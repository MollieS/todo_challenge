describe('toDoController', function() {
    beforeEach(module('toDo'));

    var ctrl;

    beforeEach(inject(function($controller) {
        ctrl = $controller('toDoController');
    }));

    it('initialises with an empty list', function(){
        expect(ctrl.list).toBeUndefined();
    });

    it('adding an item to the list', function() {
        ctrl.toDoItem = 'write more tests';
        ctrl.addItem();
        expect(ctrl.list).toEqual('write more tests');
    });
});
