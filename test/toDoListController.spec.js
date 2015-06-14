describe('toDoController', function() {
  beforeEach(module('toDo'));

  var ctrl;

  beforeEach(inject(function($controller) {
    ctrl = $controller('toDoController');
  }));

  beforeEach(function() {
    angular.module("xeditable", []);
  });

  it('initialises with an empty list', function() {
    expect(ctrl.list).toBeUndefined();
  });

  it('adding an item to the list', function() {
    ctrl.toDoItem = 'write more tests';
    ctrl.addItem();
    expect(ctrl.list[0].task).toEqual('write more tests');
  });

  it('can add two items to the list', function() {
    ctrl.toDoItem = 'write more tests';
    ctrl.addItem();
    ctrl.toDoItem = 'write even more tests';
    ctrl.addItem();
    expect(ctrl.list.length).toEqual(2);
  });

  it('can mark a task as completed', function() {
      ctrl.toDoItem = 'filter tasks';
      ctrl.addItem();
      ctrl.completeItem();
      expect(ctrl.list[0].completed).toBe(true);
      });


});
