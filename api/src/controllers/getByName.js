const axios = require ("axios")

const URL = "https://api.rawg.io/api/games?search=";
const api_key = "6d75cbcb52524ecc82493448d09c0dce";

const getByName = async (req, res) =>{
    try{ 
        const name = req.query.name
        const { data } = await axios.getAdapter(`${URL}?key=${api_key}${name}`);
        
        return data.name
        ?res.json(data)
        :res.status(404).send("juego no encontrado")
    } catch (error) {
        console.error("Error fetching data:", error);
        res.status(500).send(error);
    }
}

module.exports = getByName;

