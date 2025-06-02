import React, { useState, useEffect } from 'react';
import pokeJSON from '../Resources/Pokemon.json';
import { Pokemon } from '../types/pokemon';

interface ChoosePokemonFormProps {
  onPokemonSelect: (pokemon: Pokemon) => void;
}

export const ChoosePokemonForm: React.FC<ChoosePokemonFormProps> = ({ onPokemonSelect }) => {
  const [visiblePokemon, setVisiblePokemon] = useState<Pokemon[]>([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    // Initialize with first 10 Pokemon
    const typedPokeJSON = pokeJSON as unknown as Pokemon[];
    setVisiblePokemon(typedPokeJSON.slice(0, 10));
  }, []);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchValue = e.target.value.toUpperCase();
    setSearchTerm(searchValue);

    const typedPokeJSON = pokeJSON as unknown as Pokemon[];

    if (searchValue === '') {
      setVisiblePokemon(typedPokeJSON.slice(0, 10));
    } else {
      const filtered = typedPokeJSON
        .filter(pokemon =>
          pokemon.Data[0].PokeName.toUpperCase().includes(searchValue) ||
          pokemon.Data[0].PokeNum.toString().includes(searchValue)
        )
        .slice(0, 10);
      setVisiblePokemon(filtered);
    }
  };

  return (
    <div>
      <h3>Choose a Pokémon</h3>
      <input
        type="text"
        value={searchTerm}
        onChange={handleSearch}
        placeholder="Search by name or number..."
        className="pokemon-search-input"
      />
      <ul className="pokemon-list">
        {visiblePokemon.map((pokemon) => (
          <li
            key={pokemon.Data[0].index}
            className="PokemonList"
            onClick={() => onPokemonSelect(pokemon)}
          >
            {pokemon.Data[0].PokeName} (#{pokemon.Data[0].PokeNum})
          </li>
        ))}
      </ul>
    </div>
  );
};