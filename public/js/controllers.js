app.controller('TodosController', function($scope, $firebaseArray){
  //create reference
  var todosRef = new Firebase("https://firstfirebasetodolist.firebaseio.com/list");
  //use reference to create synchronized array
  $scope.todos = $firebaseArray(todosRef);
  $scope.newTodo = {text: "", completed: false};

  $scope.addTodo = function(){
    $scope.todos.$add($scope.newTodo).then(function(data){
      $scope.newTodo.text = "";
    })
  }

  $scope.removeTodo = function(todo){
    $scope.todos.$remove(todo);
  }

});
