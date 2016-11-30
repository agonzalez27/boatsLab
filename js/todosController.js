(function() {
  'use strict';
  angular.module('todosApp')
  .controller('TodosController', TodosController)

  function TodosController () {
    var self = this;
    self.add = addTodo;
    self.newTodo = { todo: "", image: "", done: false }
    self.all = [{ todo: "Get paid", image: "xx", done: false }]

    function addTodo () {
      self.all.push(self.newTodo)
      self.newTodo = { todo: "", image: "", done: false }
    }


    }


}());
