angular.module('alurapic')
    .factory('tokenInterceptor', function ($window) {
        var interceptor = {};

        interceptor.response = function (response) {
            var token = response.headers('x-access-token');
            if (token) {
                $window.sessionStorage.token = token;
                console.log('Token armazenado no navegador');
            }

            return response;
        };

        interceptor.request = function(config) {
            config.headers = config.headers || {};

            var token = $window.sessionStorage.token;
            if (token) {
                config.headers['x-access-token'] = token;
                console.log('Adicionando token no header p/ ser enviado p/ o servidor');
            }

            return config;
        };

        return interceptor;
    });