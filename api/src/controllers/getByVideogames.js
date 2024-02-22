const axios = require ("axios");
const { Op } = require('sequelize');
const { Videogame } = require ("../db")
//const { response } = require("express");
//const axios = require("axios");

const URL = "https://api.rawg.io/api/games";
const api_key = "6d75cbcb52524ecc82493448d09c0dce";
 
const getvideogame = async() => {
    try {
        const { data } = await axios.get(`${URL}?key=${api_key}`); //pending Realiza una solicitud GET a la URL especificada y espera la respuesta
        const videogamesApi = data.results.map(v => ({
            name: v.name,
            description: v.description,
            platforms: v.platforms.map(p => p.platform.name),
            image: v.background_image,
            released: v.released,
            rating: v.rating
          }));
          await Videogame.bulkCreate(videogamesApi);
          console.log('Videojuegos guardados exitosamente en la base de datos.');
                  //res.json(data); // Envía la respuesta JSON al cliente

       
        //console.log(data)
    } catch (error) {
        console.error("Error fetching data:", error);
        res.status(500).send("Error fetching data"); // Envía un mensaje de error al cliente si ocurre un error durante la solicitud HTTP
    }
};

module.exports = getvideogame;
   

