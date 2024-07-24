// Ubicación: src/components/DatabaseInfo.js
// Descripción: Componente para mostrar la información de la base de datos.

import React, { useState, useEffect } from 'react';
import { getDatabaseInfo } from '../services/databaseService';

const DatabaseInfo = () => {
  const [databaseInfo, setDatabaseInfo] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getDatabaseInfo();
        setDatabaseInfo(data);
      } catch (error) {
        console.error("Error fetching database info:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Database Info</h1>
      {databaseInfo ? (
        <pre>{JSON.stringify(databaseInfo, null, 2)}</pre>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default DatabaseInfo;
