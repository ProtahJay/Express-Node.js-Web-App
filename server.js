const express = require('express');
const app = express();
const port = 3000;

// Body parser middleware to handle post requests
app.use(express.urlencoded({ extended: true }));

// Set the view engine to ejs
app.set('view engine', 'ejs');

// Serve static files from the "public" directory
app.use(express.static('public'));

// Define routes
app.get('/', (req, res) => {
    res.render('index');
});

app.get('/user', (req, res) => {
    res.render('user');
});

app.get('/admin', (req, res) => {
    res.render('admin');
});

// Listen to the appropriate port
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
