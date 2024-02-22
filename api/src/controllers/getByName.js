const axios = require ("axios")

const URL = "https://api.rawg.io/api/games?search=";
const api_key = "6d75cbcb52524ecc82493448d09c0dce";

const getByName = async (req, res) =>{
    try{ const names = []
        const name = req.query.name
        const { data } = await axios.getAdapter(`${URL}?key=${api_key}${name}`);
        for(let index = 0; index = 15; index ){
            names.push({
                name: name.data()
            })
        }        
        return names.name
        ?res.json(names)
        :res.status(404).send("juego no encontrado")
    } catch (error) {
        console.error("Error fetching data:", error);
        res.status(500).send(error);
    }
}

module.exports = getByName;

