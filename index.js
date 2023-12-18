const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const morgan = require('morgan');

const app = express();

app.use(morgan('tiny'));
app.use(cors());
app.use(bodyParser.json());

const topics = require('./routes/topics');
const difficulties = require('./routes/difficulties');
const problems = require('./routes/problems');

app.get('/', (req, res) => {
    res.json({
        message: 'Running API!'
    });
});

app.get('/topics', (req, res) => {
    topics.getAll().then((topics) => {
        res.json(topics);
    });
});

app.post('/topics', (req, res) => {
    console.log(req.body);
    topics.create(req.body).then((topic) => {
        res.json(topic);
    }).catch((error) => {
        res.status(500);
        res.json(error);
    });
});

app.get('/difficulties', (req, res) => {
    difficulties.getAll().then((difficulties) => {
        res.json(difficulties);
    });
});

app.get('/problems', (req, res) => {
    problems.getAll().then((problem) => {
        res.json(problem);
    });
});

app.post('/problems', (req, res) => {
    console.log(req.body);
    problems.create(req.body).then((problems) => {
        res.json(problems);
    }).catch((error) => {
        res.status(500);
        res.json(error);
    });
});

const port = process.env.PORT || 4000;
app.listen(port, () => {
    console.log(`Listening on ${port}`);
});