const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));

const names = [];
const tasks = [];

// Configurar para servir archivos estáticos desde la carpeta "html"
app.use(express.static('html'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/html/index.html');
});

app.get('/greet', (req, res, next) => {
    const name = req.query.name;
    if (name) {
        names.push(name);
        res.redirect('/?greeted=' + name);
    } else {
        next(new Error('Name parameter is missing.'));
    }
});

app.get('/wazzup', (req, res) => {
    const name = req.query.name;
    res.sendFile(__dirname + '/html/wazzup.html');
});

app.get('/task', (req, res) => {
    res.sendFile(__dirname + '/html/index.html');
});

app.post('/task', (req, res) => {
    const task = req.body.task;
    if (task) {
        tasks.push(task);
    }
    res.redirect('/');
});

app.delete('/task', (req, res) => {
    const taskIndex = parseInt(req.query.index);
    if (!isNaN(taskIndex) && taskIndex >= 0 && taskIndex < tasks.length) {
        tasks.splice(taskIndex, 1);
    }
    res.redirect('/');
});

app.put('/greet/:name', (req, res) => {
    const name = req.params.name;
    names.push(name);
    res.json(names);
});

// Error handling middleware
app.use((err, req, res, next) => {
    res.render('index.html', { error: err.message });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
