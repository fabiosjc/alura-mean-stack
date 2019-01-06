module.exports = function(app) {
    var api = app.api.auth;

    app.post('/autenticar', api.autentica);

    // app.use: use any http verbs (get, post, delete, etc)
    app.use('/*', api.verificaToken);
};