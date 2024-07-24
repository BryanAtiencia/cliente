// Ubicación: src/services/charactersService.js
// Descripción: Servicio para obtener los datos de personajes del microservicio de Characters.

import axios from 'axios';

const API_URL = 'http://localhost:8000/characters'; // Cambia el puerto si es necesario

export const getCharacters = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error("Error fetching characters:", error);
    throw error;
  }
};
