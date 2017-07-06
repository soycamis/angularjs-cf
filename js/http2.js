// Ejemplo de peticiones ajax con $http  en angularjs

// Peticion get de post!

let app = angular.module('app', [])

app.controller('peticionget', ['$scope', '$http', ($scope, $http) => {

  $scope.hola = 'hola angularjs!'
  $scope.posts = []

  $scope.get = function() {
    $http.get('http://jsonplaceholder.typicode.com/posts')
      .then(function(response) {
        console.log(response)
        $scope.posts = response.data
      }, function(response) {})
  }

}])

// Haciendo un post

app.controller('post', ['$scope', '$http', ($scope, $http) => {

  $scope.agregarTitulo = {}
  $scope.nuevos = []

  $scope.post = function() {
    $scope.data = {
      title: $scope.agregarTitulo.title,
      body: $scope.agregarTitulo.body
    }
    $http.post('http://jsonplaceholder.typicode.com/posts', $scope.data)
      .then(function(response) {
        console.log(response)
        $scope.nuevos.push(response.data)
      })
  }

}])
