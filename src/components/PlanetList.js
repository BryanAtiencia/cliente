// Ubicación: src/components/PlanetList.js
// Descripción: Componente para mostrar la lista de planetas.

import React, { useState, useEffect } from 'react';
import { getPlanets } from '../services/planetsService';

const PlanetList = () => {
  const [planets, setPlanets] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getPlanets();
        setPlanets(data);
      } catch (error) {
        console.error("Error fetching planets:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Planets</h1>
      <ul>
        {planets.map((planet) => (
          <li key={planet.id}>{planet.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default PlanetList;
