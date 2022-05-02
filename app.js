const express = require('express');
const square = require('./square');
const createRouter = require('./wiki');
const logger = require('morgan');
const path = require('path');

const app = express();
const port = 3000;

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use('/wiki', createRouter(express));

app.use(express.static(path.join(__dirname, 'public' )));
app.use('/media', express.static(path.join(__dirname, 'media')));
app.all('/', function(req, res, next) {
  console.log('Accessing the secret section ...');
  next();
});

app.get('/', function(req, res) {
  res.render('index', {
    title: 'Learning Express',
    message: 'Hello Express!',
  });
});


app.use(function(err, req, res, next) {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

app.listen(port, function () {
  console.log(`Example app listening on port ${port}!`);
});
