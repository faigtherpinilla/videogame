const { Router } = require('express');
//const getGenres = require("../controllers/Get.genres")
const getVideogames = require ("../controllers/Get.videogames")
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

//router.use("/genres",getGenres);
router.use("/videogames",getVideogames)

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


module.exports = router;
