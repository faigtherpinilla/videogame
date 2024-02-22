const pruebabulkCreateideogame =require ("../controllers/pruebabulkCreateideogame")


const getVideogameHandler = async (req, res) => {
    try {
      const country = await pruebabulkCreateideogame();
      return res.status(200).json(country);
    } catch (error) {
      return res.status(500).send(error.message);
    }
  };
  
  module.exports =  getVideogameHandler ;