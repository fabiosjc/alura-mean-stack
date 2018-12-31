var api = {};
var fotos = [
    {_id: 1, titulo: 'Praia', url: 'https://images.unsplash.com/photo-1543988675-e050c7db2a21?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2082&q=80'},
    {_id: 2, titulo: 'Oceano', url: 'https://images.unsplash.com/photo-1543839482-6a65ff225d59?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1876&q=80'}
];


api.lista = function(req, res) {
    res.json(fotos);    
};


api.buscaPorId = function(req, res) {
    var foto = fotos.find(function(data) {
        return data._id == req.params.id;
    });

    res.json(foto);
};

module.exports = api;