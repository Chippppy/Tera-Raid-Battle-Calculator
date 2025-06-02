import React, { useState, useEffect } from 'react';
import pokeJSON from '../Resources/Pokemon.json';
import { Pokemon } from '../types/pokemon';

interface BlacklistPokemonProps {
  onBlacklistUpdate: (blacklistedPokemon: Pokemon[]) => void;
  blacklistedPokemon: Pokemon[];
}

export const BlacklistPokemon: React.FC<BlacklistPokemonProps> = ({ onBlacklistUpdate, blacklistedPokemon }) => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [blacklistSearchTerm, setBlacklistSearchTerm] = useState<string>('');
  const [filteredPokemon, setFilteredPokemon] = useState<Pokemon[]>([]);
  const [filteredBlacklist, setFilteredBlacklist] = useState<Pokemon[]>([]);

  useEffect(() => {
    const typedPokeJSON = pokeJSON as unknown as Pokemon[];
    const filtered = typedPokeJSON.filter((pokemon) => 
      pokemon.Data[0].PokeName.toLowerCase().includes(searchTerm.toLowerCase()) &&
      !blacklistedPokemon.some(bp => bp.Data[0].index === pokemon.Data[0].index)
    );
    setFilteredPokemon(filtered);
  }, [searchTerm, blacklistedPokemon]);

  useEffect(() => {
    const filtered = blacklistedPokemon.filter((pokemon) =>
      pokemon.Data[0].PokeName.toLowerCase().includes(blacklistSearchTerm.toLowerCase())
    );
    setFilteredBlacklist(filtered);
  }, [blacklistSearchTerm, blacklistedPokemon]);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleBlacklistSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setBlacklistSearchTerm(event.target.value);
  };

  const handleBlacklistSpecial = (type: 'legendary' | 'mythical' | 'mega') => {
    const typedPokeJSON = pokeJSON as unknown as Pokemon[];
    const pokemonToAdd = typedPokeJSON.filter(pokemon => {
      const isAlreadyBlacklisted = blacklistedPokemon.some(
        bp => bp.Data[0].index === pokemon.Data[0].index
      );
      
      if (isAlreadyBlacklisted) return false;

      switch (type) {
        case 'legendary':
          return pokemon.Data[0].isLegendary;
        case 'mythical':
          return pokemon.Data[0].isMythical;
        case 'mega':
          return pokemon.Data[0].isMega || pokemon.Data[0].PokeName.toLowerCase().includes('mega');
      }
    });

    const updatedBlacklist = [...blacklistedPokemon, ...pokemonToAdd];
    onBlacklistUpdate(updatedBlacklist);
  };

  const addToBlacklist = (pokemon: Pokemon) => {
    const updatedBlacklist = [...blacklistedPokemon, pokemon];
    onBlacklistUpdate(updatedBlacklist);
    setSearchTerm('');
  };

  const removeFromBlacklist = (pokemon: Pokemon) => {
    const updatedBlacklist = blacklistedPokemon.filter(
      bp => bp.Data[0].index !== pokemon.Data[0].index
    );
    onBlacklistUpdate(updatedBlacklist);
  };

  return (
    <div className="blacklist-container">
      <h3>Blacklist Pokémon</h3>
      <div className="blacklist-special-buttons">
        <button 
          className="blacklist-button"
          onClick={() => handleBlacklistSpecial('legendary')}
        >
          Blacklist All Legendary
        </button>
        <button 
          className="blacklist-button"
          onClick={() => handleBlacklistSpecial('mythical')}
        >
          Blacklist All Mythical
        </button>
        <button 
          className="blacklist-button"
          onClick={() => handleBlacklistSpecial('mega')}
        >
          Blacklist All Mega
        </button>
      </div>
      
      <input
        type="text"
        value={searchTerm}
        onChange={handleSearchChange}
        placeholder="Search Pokémon to blacklist..."
        className="pokemon-search-input"
      />
      
      {searchTerm && (
        <ul className="pokemon-list search-results">
          {filteredPokemon.slice(0, 5).map((pokemon) => (
            <li
              key={pokemon.Data[0].index}
              className="PokemonList"
              onClick={() => addToBlacklist(pokemon)}
            >
              {pokemon.Data[0].PokeName}
            </li>
          ))}
        </ul>
      )}

      <div className="blacklisted-pokemon">
        <h4>Blacklisted:</h4>
        <input
          type="text"
          value={blacklistSearchTerm}
          onChange={handleBlacklistSearchChange}
          placeholder="Search blacklisted Pokémon..."
          className="pokemon-search-input"
        />
        <ul className="pokemon-list">
          {(blacklistSearchTerm ? filteredBlacklist : blacklistedPokemon).map((pokemon) => (
            <li
              key={pokemon.Data[0].index}
              className="PokemonList blacklisted"
              onClick={() => removeFromBlacklist(pokemon)}
            >
              <img 
                src={pokemon.Data[0].PokeSpriteUrl} 
                alt={pokemon.Data[0].PokeName}
                className="blacklisted-pokemon-sprite"
              />
              {pokemon.Data[0].PokeName}
              <span className="remove-icon">×</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}; 