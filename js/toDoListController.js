toDo.controller('toDoController', [function() {
  var self = this;

  self.addItem = function() {
    if (self.list === undefined) {
      self.list = [];
    }
    self.list.push(self.toDoItem)
  };

}]);