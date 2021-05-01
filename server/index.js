import express, { response } from 'express';
// Controllers
import {getPlanetsList} from './controller/index.js';



const app = express()
const port = 3001

const messageError = 'api no disponible';



app.get('/planets', (req, res) => {
    return getPlanetsList({}).then(response =>{
        console.log('server result')
        console.log(response)
        return response.hasErrors ?  res.status(500).json({error: messageError}) : res.status(200).json(response);
    }).catch(() =>{
        return res.status(500).json({error: messageError});
    });
    
})
  
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
