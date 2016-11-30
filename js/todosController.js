(function() {
  'use strict';
  angular.module('todosApp')
  controller('TodosController', TodosController)

  function TodosController () {
    var self = this;
    self.add = addTodo;
    self.newTodo = { todo: "", image: "", done: false }



    }



}());
