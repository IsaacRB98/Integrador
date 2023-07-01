//CON EXPRESS
const URL = 'https://rickandmortyapi.com/api/character/';
const axios = require('axios');

//VERSION ASYNC AWAIT
const getCharById = async (req, res)=>{
    try{
        const {id} = req.params;
        const {data} = await axios(`${URL}/${id}`);
        const {status, name, species, origin, image, gender, error} = data;

        const character = {id, status, name, species, origin, image, gender};

        return character.name ? res.json(character) : res.status(404).json({message: error})
    } catch(reason){
        return res.status(500).send({reason: message})
    }
}




//version promesas
/*const getCharById = (req, res) => {
    const {id} = req.params 
    axios(`${URL}/${id}`).then(({data})=>{
        const {id, status, name, species, origin, image, gender, error} = data;
        const character = {id, status, name, species, origin, image, gender};

        return name ? res.json(character) : res.status(404).json({message: error});
    }).catch((reason)=>{
        return res.status(500).json({message: reason})
    })
}*/
module.exports = getCharById;




//SIN EXPRESS

/*const axios = require ('axios');
const URL = 'https://rickandmortyapi.com/api/character'


const getCharById = (res, id)=>{
axios(`https://rickandmortyapi.com/api/character/${id}`)
.then(({data})=>{
    const {
name,
gender,
species,
origin= origin.name,
image,
status
}= data;
const character ={
    id, 
    name,
    gender, 
    species,
    origin,
    image,
    status,
}
res.writeHead(200, {'Content-Type':'application/json'});
return res.end(JSON.stringify(character));
})

.catch((reason)=>{
    res.writeHead(500,{'Content-Type':'text/plain'})
    return res.end(reason.menssage)
})
}


module.exports = getCharById;*/
