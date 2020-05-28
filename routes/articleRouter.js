const express = require('express');
const bodyParser = require('body-parser');

const articleRouter = express.Router();

articleRouter.use(bodyParser.json());

articleRouter.route('/')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get( (req, res) => {
    res.end('Populate page with list of articles');
})
.post((req, res) => {
    res.end(`Add the article: ${req.body.name} with description: ${req.body.description}`);
})
.put((req, res) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /articles');
})
.delete((req, res) => {
    res.end('Deleting all saved articles');
});

module.exports = articleRouter;