module.exports = function(app) {

    var mongoose = require('mongoose');

    var api = {};
    var model = mongoose.model('Usuario');
    var jwt = require('jsonwebtoken');
    var secret = app.get('ENV_SECRET');

    api.autentica = function(req, res) {
        model
            .findOne({login: req.body.login, senha: req.body.senha})
            .then((usuario) => {
                if (!usuario) {
                    console.log('Login e senha inválidos');
                    res.sendStatus(401);
                }

                var token = jwt.sign({login: usuario.login}, secret, {expiresIn: 84600}); // 24h
                console.log('Token criado e sendo enviado ao header de resposta');
                res.set('x-access-token', token);
                res.end();
            }, function(err) {
                console.log('Login e senha inválidos', err);
                res.sendStatus(401);
            });
    };

    api.verificaToken = function(req, res, next) {
        var token = req.headers['x-access-token'];
        console.log('token: ', token);
        
        if (!token) {
            console.log('Token não foi enviado');
            res.sendStatus(401);
            return;
        }

        console.log('Verificando token...');
        jwt.verify(token, secret, function (err, decoded) {
            if(err) {
                console.log('Token rejeitado');
                res.sendStatus(401);                
            }
            req.usuario = decoded;
            next();
        });    
    };

    return api;
};