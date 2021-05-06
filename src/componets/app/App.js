import React, { useState, useEffect } from 'react';

import './App.css';
import Search from '../search'
import ItemPlanet from '../item'

const App = () => {
  const [hasErrorApi, setHasErrorApi] = useState(false);
  const [planets, setPlanets] = useState([]);
  
  useEffect(() => {
      fetch('/api/planets').then((response) =>{
        if (response.status !== 200) {
          setHasErrorApi(true);
        }
        response.json().then(function(data) {
          if(data.hasErrors){
            setHasErrorApi(true); 
          }else{
            setPlanets(data.resultList)
          }
        });
      });

      // const itemWrapper = {
      //   "name": "Tatooine",
      //   "rotation_period": "23",
      //   "orbital_period": "304",
      //   "diameter": "10465",
      //   "climate": "arid",
      //   "gravity": "1 standard",
      //   "terrain": "desert",
      //   "surface_water": "1",
      //   "population": "200000",
      //   "residents": [
      //       "http://swapi.dev/api/people/1/",
      //       "http://swapi.dev/api/people/2/",
      //       "http://swapi.dev/api/people/4/",
      //       "http://swapi.dev/api/people/6/",
      //       "http://swapi.dev/api/people/7/",
      //       "http://swapi.dev/api/people/8/",
      //       "http://swapi.dev/api/people/9/",
      //       "http://swapi.dev/api/people/11/",
      //       "http://swapi.dev/api/people/43/",
      //       "http://swapi.dev/api/people/62/"
      //   ],
      //   "films": [
      //       "http://swapi.dev/api/films/1/",
      //       "http://swapi.dev/api/films/3/",
      //       "http://swapi.dev/api/films/4/",
      //       "http://swapi.dev/api/films/5/",
      //       "http://swapi.dev/api/films/6/"
      //   ],
      //   "created": "2014-12-09T13:50:49.641000Z",
      //   "edited": "2014-12-20T20:58:18.411000Z",
      //   "url": "http://swapi.dev/api/planets/1/"
      // };
    
      // const itemWrapper2 = {
      //   "name": "Tatooine2",
      //   "rotation_period": "23",
      //   "orbital_period": "304",
      //   "diameter": "10465",
      //   "climate": "arid",
      //   "gravity": "1 standard",
      //   "terrain": "desert",
      //   "surface_water": "1",
      //   "population": "200000",
      //   "residents": [
      //       "http://swapi.dev/api/people/1/",
      //       "http://swapi.dev/api/people/2/",
      //       "http://swapi.dev/api/people/4/",
      //       "http://swapi.dev/api/people/6/",
      //       "http://swapi.dev/api/people/7/",
      //       "http://swapi.dev/api/people/8/",
      //       "http://swapi.dev/api/people/9/",
      //       "http://swapi.dev/api/people/11/",
      //       "http://swapi.dev/api/people/43/",
      //       "http://swapi.dev/api/people/62/"
      //   ],
      //   "films": [
      //       "http://swapi.dev/api/films/1/",
      //       "http://swapi.dev/api/films/3/",
      //       "http://swapi.dev/api/films/4/",
      //       "http://swapi.dev/api/films/5/",
      //       "http://swapi.dev/api/films/6/"
      //   ],
      //   "created": "2014-12-09T13:50:49.641000Z",
      //   "edited": "2014-12-20T20:58:18.411000Z",
      //   "url": "http://swapi.dev/api/planets/1/"
      // };

      // const itemWrapper3 = {
      //   "name": "Tatooine3",
      //   "rotation_period": "23",
      //   "orbital_period": "304",
      //   "diameter": "10465",
      //   "climate": "arid",
      //   "gravity": "1 standard",
      //   "terrain": "desert",
      //   "surface_water": "1",
      //   "population": "200000",
      //   "residents": [
      //       "http://swapi.dev/api/people/1/",
      //       "http://swapi.dev/api/people/2/",
      //       "http://swapi.dev/api/people/4/",
      //       "http://swapi.dev/api/people/6/",
      //       "http://swapi.dev/api/people/7/",
      //       "http://swapi.dev/api/people/8/",
      //       "http://swapi.dev/api/people/9/",
      //       "http://swapi.dev/api/people/11/",
      //       "http://swapi.dev/api/people/43/",
      //       "http://swapi.dev/api/people/62/"
      //   ],
      //   "films": [
      //       "http://swapi.dev/api/films/1/",
      //       "http://swapi.dev/api/films/3/",
      //       "http://swapi.dev/api/films/4/",
      //       "http://swapi.dev/api/films/5/",
      //       "http://swapi.dev/api/films/6/"
      //   ],
      //   "created": "2014-12-09T13:50:49.641000Z",
      //   "edited": "2014-12-20T20:58:18.411000Z",
      //   "url": "http://swapi.dev/api/planets/1/"
      // };
     
      // setPlanets([itemWrapper,itemWrapper2,itemWrapper3]);
  });

  return (
    <div className="App">
      <Search></Search>
      <div className='div_container_search_result'>
        {planets.map(planet => <ItemPlanet key={planet.name} item={planet}></ItemPlanet> )}
      </div>
    </div>
  );
}

export default App;
