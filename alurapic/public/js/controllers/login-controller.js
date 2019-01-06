angular.module('alurapic')
    .controller('LoginController', function ($scope, $http) {
        $scope.usuario = {};
        $scope.mensagem = '';

        $scope.autenticar = function () {
            var usuario = $scope.usuario;

            $http.post('/autenticar', { login: usuario.login, senha: usuario.senha })
                .then((result) => {
                    // redirect to home
                    $location.path('/');
                }).catch((err) => {
                    console.log(err);
                    $scope.mensagem = 'Login ou senha inválidos';
                });
        };
    });