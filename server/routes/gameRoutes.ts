module.exports = function(app, db) {
    app.post('/index', (req, res) => {
        res.send('Hello world~');
    });
};