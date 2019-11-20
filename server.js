var express = require('express')
var http = require('http')
var path = require('path')
var reload = require('reload')
var bodyParser = require('body-parser')
var logger = require('morgan')
var testApp = require('./src/test');
var app = express()

var publicDir = path.join(__dirname, 'public')

app.set('port', process.env.PORT || 3000)
app.use(logger('dev'))
app.use(bodyParser.json()) // Parses json, multi-part (file), url-encoded

app.get('/', function(req, res) {
    testApp.add();
    res.sendFile(path.join(publicDir, 'index.html'))
})

app.use(express.static('public'));

// Webpack
var webpack = require('webpack');
var webpackConfig = require('./webpack.config.js');
var compiler = webpack(webpackConfig);
app.use(require("webpack-dev-middleware")(compiler, {
    noInfo: true, publicPath: webpackConfig.output.publicPath
}));
app.use(require("webpack-hot-middleware")(compiler));

var server = http.createServer(app);

// // Serve the files on port 3000.
// app.listen(process.env.PORT || 3000, function () {
//   console.log('Example app listening on port 3000!\n');
// });

// Reload code here
reload(app).then(function(reloadReturned) {
    // reloadReturned is documented in the returns API in the README

    // Reload started, start web server
    server.listen(app.get('port'), function() {
        console.log('Web server listening on port ' + app.get('port'))
    })
}).catch(function(err) {
    console.error('Reload could not start, could not start server/sample app', err)
});