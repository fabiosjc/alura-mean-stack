module.exports = function(uri) {
    var mongoose = require('mongoose');

    mongoose.connect('mongodb://' + uri);

    mongoose.connection.on('connected', function () {
        console.log('Conectado ao banco de dados [mongodb].');
    });

    mongoose.connection.on('error', function (erro) {
        console.log('Erro na conexão com banco de dados: ' + erro);
    });

    mongoose.connection.on('disconnect', function () {
        console.log('Desconectado do banco de dados');
    });

    process.on('SIGINT', function(){
        mongoose.connection.close(function () {
           console.log('Conexão fechada pelo término da aplicação');
           process.exit(0);
        });
    });
};

