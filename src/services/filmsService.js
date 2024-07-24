// Ubicación: src/services/filmsService.js
// Descripción: Servicio para obtener los datos de películas del microservicio de Films.

import axios from 'axios';

const API_URL = 'http://localhost:8000/films'; // Cambia el puerto si es necesario

export const getFilms = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error("Error fetching films:", error);
    throw error;
  }
};
