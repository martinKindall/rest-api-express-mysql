module.exports = function(app) {

    app.get('/lenguajes', (req, res) => {
        res.json([
            {nombre: 'javascript'},
            {nombre: 'python'}
        ]);
    });
};