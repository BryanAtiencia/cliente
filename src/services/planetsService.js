// Ubicación: src/services/planetsService.js
// Descripción: Servicio para obtener los datos de planetas del microservicio de Planets.

import axios from 'axios';

const API_URL = 'http://localhost:8000/planets'; // Cambia el puerto si es necesario

export const getPlanets = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error("Error fetching planets:", error);
    throw error;
  }
};
