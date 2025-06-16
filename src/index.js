const express = require('express');
const morgan = require('morgan');
const { engine } = require('express-handlebars');
const path = require('path');
// Import routes
const routes = require('./routes');
const db = require('./config/db');

// connect to DB
db.connect();

const app = express();
const port = 2005;

// Middleware to parse URL-encoded bodies
app.use(express.urlencoded({ extended: true }));
// Middleware to parse JSON bodies
app.use(express.json());

// Set up static file serving
app.use(express.static(path.join(__dirname, 'public')));

// Use morgan for logging HTTP requests
app.use(morgan('combined'));

// Set up Handlebars as the template engine
app.engine('hbs', engine({
    extname: 'hbs' // config file
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));

// routes
routes(app);

app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`)
});
