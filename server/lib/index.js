// import 'babel-polyfill'
import express from 'express';
import api from './api'
import config from './config'

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

app.listen(config.get('port'), function () {
    console.log(`Example app listening on port ${config.get('port')}!`)
});
