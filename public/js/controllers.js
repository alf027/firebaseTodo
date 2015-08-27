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

$scope.showTodo = function(todo){
  $scope.text = todo.text;
  $scope.id = todo.$id;
}

$scope.saveChanges = function(todo,text,completed){
  //var id = $scope.id;
  //var record = $scope.todos.$getRecord(id);
  console.log(todo);
  console.log(text);
  console.log(completed);
  todo.text = text;
  if (completed == 'completed') {
    todo.completed = true;
  } else {
    todo.completed = false;
  }
  //todo.completed = $scope.completed;
  console.log(todo);

  $scope.todos.$save(todo);
}

  $scope.removeTodo = function(todo){
    $scope.todos.$remove(todo);
  }

});
