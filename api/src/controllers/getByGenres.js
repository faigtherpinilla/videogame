const {axios} = require ("axios");
//const axios = require("axios");

const URL = "https://api.rawg.io/api/genres?key=6d75cbcb52524ecc82493448d09c0dce";
 
const getById = async (req,res) =>{

    try{
        const genres = req.params.id;
        const {data} = await axios.get(`${URL}`);
        console.log(data)
        
        const {id , name} = data;
        const character = {id , name};
      
    
        return character.name
            ? res.json(character)
            : res.status(404).send("Not found")
      } catch (error) {
        return res.status(500).send(error.message);
      }
    };
    
    //module.exports = getById;