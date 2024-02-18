const { Router } = require('express');
const getGenres = require("../controllers/getByGenres");
//const GenresHandler = require("../handlers/genreshandler")
const getVideogames = require ("../controllers/getByVideogames"); 
const getById = require ("../controllers/getById")
const getByName = require("../controllers/getByName")

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

router.use("/genres",getGenres);
//router.use("/genres",GenresHandler)
router.use("/videogames/:videogameId", getById )
router.use("/videogames",getVideogames)
router.use("/videogames/?name=",getByName)



// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


module.exports = router;
