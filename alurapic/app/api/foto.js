var mongoose = require('mongoose');

var api = {};

var model = mongoose.model('Foto');

api.lista = function(req, res) {
    model
        .find({})
        .then(function(fotos) {
            res.json(fotos);
        }, function(error) {
            console.log(error);
            res.status(500).json(err);
        });
};

api.buscaPorId = function(req, res) {
    model
        .findById(req.params.id)
        .then(function(foto) {
            if (!foto) {
                throw new Error('Foto não encontrada');
            }
            res.json(foto);
        }, function (err) {
            console.log(err);
            res.status(500).json(err);
        });
};

api.removePorId = function(req, res) {
    model
        .findByIdAndRemove(req.params.id)
        .then(function name(params) {
            res.sendStatus(204);
        }, function(err) {
            console.log(err);
            res.status(500).json(err);
        });
};

api.adiciona = function(req, res) {
    model.create(req.body)
        .then(function(foto) {
            res.json(foto);
        }, function(err) {
            console.log(err);
            res.status(500).json(err);
        });
};

api.atualiza = function(req, res) {
    model
        .findByIdAndUpdate(req.params.id, req.body)
        .then(function(foto) {
            res.json(foto);
        }, function(err) {
            console.log(err);
            res.status(500).json(err);
        });
};

module.exports = api;