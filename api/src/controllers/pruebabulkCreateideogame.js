const axios = require ("axios");
const {Genres,Videogames} = require ("../db")

const getvideogames = async () => {
    const videogamescargados = await Videogames.findAll({
        include: [Genres],
    })
    if(videogamescargados.length === 0 ){
        const { data } = await axios(`${URL}?key=${api_key}`)
        const videogamesData = data.map((Videogames)=>({
            id: Videogames.id,
            name: Videogames.name,
            platforms: Videogames.platform && Videogames.platforms.map(p => p.platform.name),
            image: Videogames.background_image,
            released: Videogames.released, 
            rating: Videogames.rating,
            genres: Videogames.genres && Videogames.genres.map(g => ({ id: g.id, name: g.name })).sort(),
        }));
        for (const Videogames of videogamesData) {
            Videogames.genres = await Genresenres.findAll({
                include: [{
                    model:Videogames,
                    //where: { id: Genres.id },
                    //throw: { attributes: [] },
                }],
            })
        }; 
        await Videogames.bulkCreate(videogamesData,{ ignoreDuplpicate: true });
        return videogamesData;
    } else {
        return videogamescargados;
    }

    
};
//module.exports = getvideogames