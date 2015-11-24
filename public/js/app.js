var app = angular.module('pessoaApp', ['ngRoute']);


angular.module('pessoaApp').config(['$routeProvider', function($routeProvider) {
  $routeProvider
     .when('/', { controller: 'listaController', templateUrl: 'lista.html' })
     .when('/editar/:nome', { controller: 'editarController', templateUrl: 'form.html' })
     .when('/novo', { controller: 'novoController', templateUrl: 'form.html' })
     .otherwise({ redirectTo: '/' });
}]);

angular.module('pessoaApp').run(['$rootScope', function($rootScope) {
  $rootScope.pessoas = ['Danilo Miranda Terra'];
}]);

angular.module('pessoaApp').controller('listaController', function($scope) {
  //ToDo
});

angular.module('pessoaApp').controller('editarController', function($scope, $location, $routeParams) {
  $scope.titulo = 'Editar Pessoa';
  $scope.pessoa = $routeParams.nome;

  $scope.pessoaIndex = $scope.pessoas.indexOf($scope.pessoa);

  $scope.salvar = function() {
    $scope.pessoas[$scope.pessoaIndex] = $scope.pessoa;
    $location.path('/');
  };
});

angular.module('pessoaApp').controller('novoController', function($scope, $location, $routeParams) {
  $scope.titulo = 'Nova Pessoa';
  $scope.pessoa = '';

  $scope.salvar = function() {
    $scope.pessoas.push($scope.pessoa);
    $location.path('/');
  };
});
