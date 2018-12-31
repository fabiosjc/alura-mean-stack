module.exports = function(app) {
    app.get('/v1/fotos', function(req, res) {
        var fotos = [
            {_id: 1, titulo: 'Praia', url: 'https://images.unsplash.com/photo-1543988675-e050c7db2a21?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2082&q=80'},
            {_id: 2, titulo: 'Oceano', url: 'https://images.unsplash.com/photo-1543839482-6a65ff225d59?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1876&q=80'}
        ];

        res.json(fotos);
    });
};
