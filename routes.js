
module.exports = function(app, databaseService) {

    app.get('/lenguajes', (req, res) => {
        databaseService.getLenguages()
            .then(lenguajes => res.json(lenguajes))
            .catch(e => res.status(500).send(e));
    });

    app.post('/lenguajes', (req, res) => {
        const newLenguaje = req.body;
        console.log(newLenguaje);
        databaseService
            .crearLenguaje(
                newLenguaje.nombre, 
                newLenguaje.lanzamiento, 
                newLenguaje.tipado_estatico)
            .then(() => {
                res.json({message: "created!"});
            }).catch(e => {
                res.status(500).send(e);
            });
    });
};