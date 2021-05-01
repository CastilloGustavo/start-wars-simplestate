import axios from 'axios';

const domain = 'https://swapi.dev/api';

const getPlanetsList = async (params) => {
    // Se podria llevar a una carpeta donde esten todos los models
    let result = { hasErrors: false, resultList:[] };
    // Parametros a filtrar
    try{
      const response = await axios.get(`${domain}/planets/`);
      // console.log(response.data);
      result.resultList = response.data.results;
      return result;
    } catch (e){
       // Guardar Error en Base de Datos o Kibana Etcs. Generar Alarma para DataDog o metrica de errors de app NewRelic.
       return result.hasErrors = true;      
    }
};

const getPlanetById = (params) =>{
    // Se podria llevar a una carpeta donde esten todos los models
    let result = { hasErrors: False, resultList:[] };
    return result;
};

export { getPlanetsList, getPlanetById} ;
