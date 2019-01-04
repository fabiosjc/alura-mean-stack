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

};

api.removePorId = function(req, res) {

};

api.adiciona = function(req, res) {

};

api.atualiza = function(req, res) {

};

module.exports = api;