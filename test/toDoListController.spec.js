describe('ToDoListController', function() {
    beforeEach(module('toDo'));

    var ctrl;

    beforeEach(inject(function($controller) {
        ctrl = $controller('ToDoListController');
    }));
});
