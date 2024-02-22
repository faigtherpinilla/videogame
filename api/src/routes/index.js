const { Router } = require('express');
const getGenres = require("../controllers/getByGenres");
//const GenresHandler = require("../handlers/genreshandler")
//const getVideogames = require ("../controllers/getByVideogames"); 
const getById = require ("../controllers/getById")
const getByName = require("../controllers/getByName")
const getVideogamesHandler = require ("../handlers/cargadevideogames")

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();
router.use("/videogames/:videogameId", getById )
router.use("/videogames/?name=/?size=15", getByName )
router.use("/genres",getGenres);
router.use("/videogames", getVideogamesHandler )
//router.use("/genres",GenresHandler)
//router.use("/videogames",getVideogames)




// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


module.exports = router;
