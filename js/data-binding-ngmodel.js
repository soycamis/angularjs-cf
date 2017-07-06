angular.module('Modulo1', [])
  .controller('Controlador1', ['$scope', function($scope) {

    $scope.hola = 'Hola!'
    $scope.nombre = 'camilo'
    $scope.nuevoComentario = {}

    $scope.comentarios = [
      {
        comentario: "Yey primero comemtario!",
        autor: "autor1"
      },
      {
        comentario: "Segundo comentario...",
        autor: "autor2"
      }
    ]

    $scope.agregarComentario = function() {
      $scope.comentarios.push($scope.nuevoComentario)
      $scope.nuevoComentario = {}
    }
  }])
