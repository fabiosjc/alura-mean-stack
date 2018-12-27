var http = require('http');
http.createServer(function(req, res) {
    res.writeHead(200, {"Content-Type": "text/html; charset=utf-8"});

    var index = req.url.indexOf('=');
    var name = (index != -1) ? req.url.substr(index + 1) : 'guest';
    var body = `<h1>Hello ${name}!</h1>`;

    res.write(body, "utf-8");
    res.end();
}).listen(3000, function () {
    console.log("Server started");
});

