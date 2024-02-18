const axios = require("axios");
const { Genres } = require("../db");
const Videogame = require("../models/Videogame");
//const axios = require("axios");

const URL = "https://api.rawg.io/api/genres?key=6d75cbcb52524ecc82493448d09c0dce";

const getGenres = async (req, res) => {
  try {
      let allGenres = await Genres.findAll({
          order: [['name', 'ASC']]
      });
      if (allGenres.length===0){
          const { data } = await axios(URL);
          const genres = data.results.map(genre => ({ name: genre.name }));
          allGenres = await Genres.bulkCreate(genres);
          allGenres = await Genres.findAll({
              order: [['name', 'ASC']]
          });
      }
      res.json(allGenres);
  } catch (error) {
      res.status(500).send(error.message);
  }
};

    

module.exports = getGenres;