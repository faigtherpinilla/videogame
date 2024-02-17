const  axios  = require("axios")
const URL = "https://api.rawg.io/api/games/";
const api_key = "6d75cbcb52524ecc82493448d09c0dce";


const getById = async (req, res) => {
    try {        
        const videogameId = req.params.videogameId // parameters ; params ; body ; query
        const { data } = await axios.get(`${URL}${videogameId}?key=${api_key}`,{ValidateStatus:false}); 
        return data.name
        ?res.json(data) //ternario
        :res.status(404).send("no se encontro el juego")
    } catch (error) {
        console.error("Error fetching data:", error);
        res.status(500).send(error); // Envía un mensaje de error al cliente si ocurre un error durante la solicitud HTTP
    }


};

module.exports = getById; 