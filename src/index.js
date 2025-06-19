const express = require('express');
const morgan = require('morgan');
const { engine } = require('express-handlebars');
const path = require('path');
const methodOverride = require('method-override');
const routes = require('./routes');
const db = require('./config/db');

// connect to DB
db.connect();

const app = express();
const port = 2025;

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
    extname: 'hbs', // config file
    helpers: { // Custom Handlebars helpers
        // Custom helper to format dates
        formatDate: (date) => {
            return new Date(date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: '2-digit',
                day: '2-digit',
            });
        },
        // Custom helper to format numbers
        sum: (a, b) => a + b,
        
    }
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));

// Method override for PUT and DELETE requests
app.use(methodOverride('_method'));

// routes
routes(app);

app.listen(port, () => {
    console.log(`App listening on port http://localhost:${port}`)
});
