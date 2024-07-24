// Ubicación: src/services/databaseService.js
// Descripción: Servicio para obtener los datos de la base de datos del microservicio de Database.

import axios from 'axios';

const API_URL = 'http://localhost:8000/database'; // Cambia el puerto si es necesario

export const getDatabaseInfo = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error("Error fetching database info:", error);
    throw error;
  }
};
