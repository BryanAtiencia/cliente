// Ubicación: src/components/CharacterList.js
// Descripción: Componente para mostrar la lista de personajes.

import React, { useState, useEffect } from 'react';
import { getCharacters } from '../services/charactersService';

const CharacterList = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getCharacters();
        setCharacters(data);
      } catch (error) {
        console.error("Error fetching characters:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Characters</h1>
      <ul>
        {characters.map((character) => (
          <li key={character.id}>{character.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default CharacterList;
