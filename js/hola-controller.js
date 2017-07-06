// Creando nuestro pirmer controlador en angularjs.

let myApp = angular.module('myApp', [])

myApp.controller('myController1', function ($scope) {

  // Declarando una propiedad para que pueda ser leida y mostrada
  // en el front...

  $scope.nombre = 'Camilo'
  $scope.edad = 30

})

myApp.controller('myController2', function ($scope) {

  // Declarando otras propiedad para un segundo controlador.

  $scope.marca = 'HP'
  $scope.color = 'Plata/Negro'

})
