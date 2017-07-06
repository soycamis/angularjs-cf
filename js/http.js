// Ejemplo usando peticiones ajax, con $http


let app = angular.module('appHTTP', [])

app.controller('controladorHTTP', ['$scope', '$http', function($scope, $http) {

  $scope.hola = 'HOLA!'

  $scope.posts = []



  $scope.obtenerGet = function() {
    $http.get('https://jsonplaceholder.typicode.com/posts')
      .then(function(data) {
        console.log(data.data)
        $scope.posts = data.data
      }, function(err) {
        console.log(err)
      })
  }



}])

app.controller('postHTTP', ['$scope', '$http', function($scope, $http) {

  $scope.nuevoPost = {}
  $scope.p = []

  $scope.agregarPost = function() {

  $scope.config = {
    title: $scope.nuevoPost.title,
    body: $scope.nuevoPost.body,
    userId: 1
  }

    $http.post('http://jsonplaceholder.typicode.com/posts', $scope.config)
      .then(function(data) {
        console.log(data.data)
        $scope.p.push(data.data)
        $scope.nuevoPost = {}
      }, function(err) {
        console.log(err)
      })
  }



}])
