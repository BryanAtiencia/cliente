// Ubicación: src/components/FilmList.js
// Descripción: Componente para mostrar la lista de películas.

import React, { useState, useEffect } from 'react';
import { getFilms } from '../services/filmsService';

const FilmList = () => {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getFilms();
        setFilms(data);
      } catch (error) {
        console.error("Error fetching films:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Films</h1>
      <ul>
        {films.map((film) => (
          <li key={film.id}>{film.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default FilmList;
