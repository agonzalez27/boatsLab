(function() {
  'use strict';
  angular.module('todosApp')
  .controller('TodosController', TodosController)

  function TodosController ($scope, $log) {
    $scope.add = addTodo;
    $scope.newTodo = { todo: "", image: "", done: false }
    $scope.all = [{ todo: "Get paid", image: "xx", done: false }]

    $log.log($scope.all)

    function addTodo () {
      $scope.all.push($scope.newTodo)
      $scope.newTodo = { todo: "", image: "", done: false }
    }


    }


}());
