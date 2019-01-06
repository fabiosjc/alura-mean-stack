angular.module('alurapic')
    .controller('LoginController', function ($scope, $http, $location) {
        $scope.usuario = {};
        $scope.mensagem = '';

        $scope.autenticar = function () {
            var usuario = $scope.usuario;

            $http.post('/autenticar', { login: usuario.login, senha: usuario.senha })
                .then(() => {
                    // redirect to home
                    $location.path('/');
                }).catch((err) => {
                    $scope.usuario = {};
                    $scope.mensagem = 'Login ou senha inválidos';
                });
        };
    });