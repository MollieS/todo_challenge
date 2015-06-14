toDo.controller('toDoController', [function() {
  var self = this;

  self.addItem = function() {
    if (self.list === undefined) {
      self.list = [];
    }
    var item = {completed: false, task: self.toDoItem}
    self.list.push(item)
  };

  self.completeItem = function() {
      self.list[0].completed = true
      
  }

}]);
