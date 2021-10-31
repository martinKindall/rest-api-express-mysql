module.exports = function(app) {

    app.get('/lenguajes', (req, res) => {
        res.json([
            {nombre: 'javascript'},
            {nombre: 'python'}
        ]);
    });

    app.post('/lenguajes', (req, res) => {
        const newLenguaje = req.body;
        console.log(newLenguaje);

        res.json({message: "created!"});
    });
};