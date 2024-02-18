const  getGenres  = require("../controllers/getByGenres");

const getGenresHandler = async (req, res) => {
    try {
        const response = await getGenres();
        res.json(response);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
}

module.exports = getGenresHandler;