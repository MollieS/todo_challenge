describe('toDoController', function() {
  beforeEach(module('toDo'));

  var ctrl;
  var addTask = function(text) {
    ctrl.toDoItem = text;
    ctrl.addItem();
  }

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
      addTask('write more tests');
    expect(ctrl.list[0].task).toEqual('write more tests');
  });

  it('can add two items to the list', function() {
     addTask('write more tests');
    addTask('write better tests');
    expect(ctrl.list.length).toEqual(2);
  });

  it('can mark a task as completed', function() {
      addTask('complete tasks')
      ctrl.completeItem('complete tasks');
      expect(ctrl.list[0].completed).toBe(true);
      });

  it('can mark the correct task as completed', function(){
    addTask('complete tasks');
    addTask('add tests');
    ctrl.completeItem('add tests');
    expect(ctrl.list[1].completed).toBe(true);
  });


});
