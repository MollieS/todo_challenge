toDo.controller('toDoController', [function() {
  var self = this;

  self.addItem = function() {
    if (self.list === undefined) {
      self.list = [];
    }
    var item = {
      completed: false,
      task: self.toDoItem
    }
    self.list.push(item)
  };

  self.completeItem = function(task) {
    for (i = 0; i < self.list.length; i++) {
      if (self.list[i].task === task) {
        self.list[i].completed = true;
      }
    }
  }

  self.countItems = function(){
    self.list.length
  }

}]);