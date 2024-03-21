const express = require('express');
const app = express();

// Serve static files from the 'public' directory
app.use(express.static('public'));

// Define route to serve your HTML file
app.get('/ethan-wu.jpg', (req, res) => {
    res.sendFile(__dirname + '/ethan-wu.jpg');
});

// Route to Main
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/Main/index.html');
});

app.get('/style.css', (req, res) => {
    res.sendFile(__dirname + '/Main/style.css');
});


// Route to Main-No-Anime
app.get('/Main-No-Anime/index.html', (req, res) => {
    res.sendFile(__dirname + '/Main-No-Anime/index.html');
});

app.get('/Main-No-Anime/style.css', (req, res) => {
    res.sendFile(__dirname + '/Main-No-Anime/style.css');
});

// Route to Resume
app.get('/Resume/resume.pdf', (req, res) => {
    res.sendFile(__dirname + '/Resume/resume.pdf');
});

app.get('/Resume/resume.html', (req, res) => {
    res.sendFile(__dirname + '/Resume/resume.html');
});

app.get('/Resume/resume-style.css', (req, res) => {
    res.sendFile(__dirname + '/Resume/resume-style.css');
});

// Route to Chorme Dinosaur
app.get('/Chrome-Dinosaur/cactus.png', (req, res) => {
    res.sendFile(__dirname + '/Chrome-Dinosaur/cactus.png');
});

app.get('/Chrome-Dinosaur/floor.jpg', (req, res) => {
    res.sendFile(__dirname + '/Chrome-Dinosaur/floor.jpg');
});

app.get('/Chrome-Dinosaur/trex.png', (req, res) => {
    res.sendFile(__dirname + '/Chrome-Dinosaur/trex.png');
});

app.get('/Chrome-Dinosaur/index.html', (req, res) => {
    res.sendFile(__dirname + '/Chrome-Dinosaur/index.html');
});

app.get('/Chrome-Dinosaur/scripts.js', (req, res) => {
    res.sendFile(__dirname + '/Chrome-Dinosaur/scripts.js');
});

app.get('/Chrome-Dinosaur/styles.css', (req, res) => {
    res.sendFile(__dirname + '/Chrome-Dinosaur/styles.css');
});

// Route to About
app.get('/About/about.html', (req, res) => {
    res.sendFile(__dirname + '/About/about.html');
});

app.get('/About/style.css', (req, res) => {
    res.sendFile(__dirname + '/About/style.css');
});

// Start the server
const port = 3000; // You can change this to any port you want
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
