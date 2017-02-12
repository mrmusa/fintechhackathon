// import 'babel-polyfill'

// import http from 'http';
//
// http.createServer((req, res) => {
//     res.writeHead(200, {'Content-Type': 'text/plain'});
// res.end('Hello World\n');
// }).listen(1337, '127.0.0.1');
//
// console.log('Server running at http://127.0.0.1:1337/');


import express from 'express';
import api from './api'

const app = express();

app.use('/api', api)

app.get('/', function (req, res) {
    res.send('Hello World!')
});

// catch 404 and forward to error handler
app.use((req, res, next) => {
    const err = new Error('Not Found');
    err.status = 404;
    next(err)
});

app.listen(1337, function () {
    console.log('Example app listening on port 1337!')
});
