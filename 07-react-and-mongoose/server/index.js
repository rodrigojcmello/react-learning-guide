// Express ---------------------------------------------------------------------

const app = require('express')();

// Mongo -----------------------------------------------------------------------

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:3000');

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    // we're connected!
});

const gatinho = require('./models/gatinho');

// Webpack ---------------------------------------------------------------------

const webpackMiddleware = require('webpack-dev-middleware');
const webpackConfig = require('../webpack.config.js');
const compiler = require('webpack')(webpackConfig);

// -----------------------------------------------------------------------------

app.use(webpackMiddleware(compiler));
app.get('*');
app.listen(3000);
