import React, { useEffect, useState } from 'react';
import pokeJSON from '../Resources/Pokemon.json';
import { Pokemon, PokemonData } from '../types/pokemon';

interface CalculatedOddsProps {
  selectedPokemon: Pokemon | null;
  selectedTeraType: string | null;
  blacklistedPokemon: Pokemon[];
}

const calculateTypeEffectiveness = (attackingType: string, defendingType: string, ignoreImmunity: boolean = false): number => {
  const typeAdvantages: { [key: string]: string[] } = {
    NORMAL: [],
    FIGHTING: ['NORMAL', 'ROCK', 'STEEL', 'ICE', 'DARK'],
    FLYING: ['FIGHTING', 'BUG', 'GRASS'],
    POISON: ['GRASS', 'FAIRY'],
    GROUND: ['POISON', 'ROCK', 'STEEL', 'FIRE', 'ELECTRIC'],
    ROCK: ['FLYING', 'BUG', 'FIRE', 'ICE'],
    BUG: ['GRASS', 'PSYCHIC', 'DARK'],
    GHOST: ['GHOST', 'PSYCHIC'],
    STEEL: ['ROCK', 'ICE', 'FAIRY'],
    FIRE: ['BUG', 'STEEL', 'GRASS', 'ICE'],
    WATER: ['GROUND', 'ROCK', 'FIRE'],
    GRASS: ['GROUND', 'ROCK', 'WATER'],
    ELECTRIC: ['FLYING', 'WATER'],
    PSYCHIC: ['FIGHTING', 'POISON'],
    ICE: ['FLYING', 'GROUND', 'GRASS', 'DRAGON'],
    DRAGON: ['DRAGON'],
    DARK: ['GHOST', 'PSYCHIC'],
    FAIRY: ['FIGHTING', 'DRAGON', 'DARK']
  };

  const typeWeaknesses: { [key: string]: string[] } = {
    NORMAL: ['FIGHTING'],
    FIGHTING: ['FLYING', 'PSYCHIC', 'FAIRY'],
    FLYING: ['ROCK', 'ELECTRIC', 'ICE'],
    POISON: ['GROUND', 'PSYCHIC'],
    GROUND: ['WATER', 'GRASS', 'ICE'],
    ROCK: ['FIGHTING', 'GROUND', 'STEEL', 'WATER', 'GRASS'],
    BUG: ['FLYING', 'ROCK', 'FIRE'],
    GHOST: ['GHOST', 'DARK'],
    STEEL: ['FIGHTING', 'GROUND', 'FIRE'],
    FIRE: ['GROUND', 'ROCK', 'WATER'],
    WATER: ['GRASS', 'ELECTRIC'],
    GRASS: ['FLYING', 'POISON', 'BUG', 'FIRE', 'ICE'],
    ELECTRIC: ['GROUND'],
    PSYCHIC: ['BUG', 'GHOST', 'DARK'],
    ICE: ['FIGHTING', 'ROCK', 'STEEL', 'FIRE'],
    DRAGON: ['ICE', 'DRAGON', 'FAIRY'],
    DARK: ['FIGHTING', 'BUG', 'FAIRY'],
    FAIRY: ['POISON', 'STEEL']
  };

  const immunities: { [key: string]: string[] } = {
    NORMAL: ['GHOST'],
    FLYING: ['GROUND'],
    GHOST: ['NORMAL', 'FIGHTING'],
    STEEL: [],
    DARK: ['PSYCHIC'],
    FAIRY: ['DRAGON']
  };

  // Check for immunities only if we're not ignoring them
  if (!ignoreImmunity && immunities[defendingType]?.includes(attackingType)) {
    return 0;
  }

  // Super effective
  if (typeAdvantages[attackingType]?.includes(defendingType)) {
    return 2;
  }

  // Not very effective
  if (typeWeaknesses[defendingType]?.includes(attackingType)) {
    return 0.5;
  }

  // Normal effectiveness
  return 1;
};

const calculateCounterScore = (pokemon: PokemonData, targetPokemon: PokemonData, teraType: string): number => {
  let score = 0;
  
  // Base defensive score (Survivability)
  const defenseScore = (pokemon.statsHP * 1.2) + (pokemon.statsDef * 0.8) + (pokemon.statsSpDef * 0.8);
  score += defenseScore;

  // Calculate defensive type effectiveness against target's original types
  let originalTypeMultiplier = 1;
  const isDualType = targetPokemon.PokeType2 !== null;
  
  // Get effectiveness for both of the counter's types against the target's first type
  const type1vsCounter1 = calculateTypeEffectiveness(targetPokemon.PokeType1, pokemon.PokeType1, true);
  const type1vsCounter2 = pokemon.PokeType2 ? calculateTypeEffectiveness(targetPokemon.PokeType1, pokemon.PokeType2, true) : 1;
  
  // Get effectiveness for both of the counter's types against the target's second type (if it exists)
  const type2vsCounter1 = targetPokemon.PokeType2 ? calculateTypeEffectiveness(targetPokemon.PokeType2, pokemon.PokeType1, true) : 1;
  const type2vsCounter2 = targetPokemon.PokeType2 && pokemon.PokeType2 ? calculateTypeEffectiveness(targetPokemon.PokeType2, pokemon.PokeType2, true) : 1;

  // Check if target's types are super effective against the counter
  const counterType1Weakness = calculateTypeEffectiveness(pokemon.PokeType1, targetPokemon.PokeType1, true) === 2 ||
    (targetPokemon.PokeType2 && calculateTypeEffectiveness(pokemon.PokeType1, targetPokemon.PokeType2, true) === 2);

  const counterType2Weakness = pokemon.PokeType2 && (
    calculateTypeEffectiveness(pokemon.PokeType2, targetPokemon.PokeType1, true) === 2 ||
    (targetPokemon.PokeType2 && calculateTypeEffectiveness(pokemon.PokeType2, targetPokemon.PokeType2, true) === 2)
  );

  // Apply weakness penalty
  if (counterType1Weakness || counterType2Weakness) {
    score *= 0.5; // Significant penalty for being weak to original typing
  }

  // Check for complete immunity (only if target is dual-type and counter is immune to both types)
  const isImmuneToType1 = calculateTypeEffectiveness(targetPokemon.PokeType1, pokemon.PokeType1, false) === 0 &&
    (!pokemon.PokeType2 || calculateTypeEffectiveness(targetPokemon.PokeType1, pokemon.PokeType2, false) === 0);

  const isImmuneToType2 = targetPokemon.PokeType2 && 
    calculateTypeEffectiveness(targetPokemon.PokeType2, pokemon.PokeType1, false) === 0 &&
    (!pokemon.PokeType2 || calculateTypeEffectiveness(targetPokemon.PokeType2, pokemon.PokeType2, false) === 0);

  if (isDualType && isImmuneToType1 && isImmuneToType2) {
    originalTypeMultiplier = 0;
  } else {
    // If not completely immune, use the normal type effectiveness calculations
    originalTypeMultiplier = Math.min(
      Math.max(type1vsCounter1, type1vsCounter2),
      Math.max(type2vsCounter1, type2vsCounter2)
    );
  }

  // Calculate effectiveness against tera type (never consider immunities)
  let teraTypeMultiplier = calculateTypeEffectiveness(teraType, pokemon.PokeType1, true);
  if (pokemon.PokeType2) {
    teraTypeMultiplier = Math.min(teraTypeMultiplier, 
      calculateTypeEffectiveness(teraType, pokemon.PokeType2, true));
  }

  // Combine the multipliers, giving more weight to the tera type effectiveness
  const defensiveMultiplier = (originalTypeMultiplier + teraTypeMultiplier * 2) / 3;

  // Adjust score based on defensive effectiveness
  score *= (1 / Math.max(defensiveMultiplier, 0.125)); // Cap minimum multiplier to prevent extreme scores

  // Offensive capabilities
  let offenseScore = 0;
  const hasPhysicalSTAB = calculateTypeEffectiveness(pokemon.PokeType1, teraType) > 1 ? pokemon.statsAtk * 1.5 : pokemon.statsAtk;
  const hasSpecialSTAB = calculateTypeEffectiveness(pokemon.PokeType1, teraType) > 1 ? pokemon.statsSpAtk * 1.5 : pokemon.statsSpAtk;
  
  if (pokemon.PokeType2) {
    if (calculateTypeEffectiveness(pokemon.PokeType2, teraType) > 1) {
      offenseScore += Math.max(pokemon.statsAtk * 1.5, pokemon.statsSpAtk * 1.5);
    }
  }
  
  offenseScore += Math.max(hasPhysicalSTAB, hasSpecialSTAB);
  score += offenseScore;

  // Speed consideration
  if (pokemon.statsSpd >= 100) score += 50;
  if (pokemon.statsSpd >= 90) score += 30;
  if (pokemon.statsSpd >= 80) score += 20;

  // Stat total consideration
  score += (pokemon.statsTotal - 500) * 0.3;

  return Math.round(score);
};

export const CalculatedOdds: React.FC<CalculatedOddsProps> = ({ 
  selectedPokemon, 
  selectedTeraType,
  blacklistedPokemon 
}) => {
  const [bestCounters, setBestCounters] = useState<Pokemon[]>([]);

  useEffect(() => {
    if (selectedPokemon && selectedTeraType) {
      const counters = findBestPokemons(selectedPokemon, selectedTeraType);
      setBestCounters(counters);
    } else {
      setBestCounters([]);
    }
  }, [selectedPokemon, selectedTeraType, blacklistedPokemon]);

  const findBestPokemons = (targetPokemon: Pokemon, teraType: string): Pokemon[] => {
    const typedPokeJSON = pokeJSON as unknown as Pokemon[];
    const availablePokemon = typedPokeJSON.filter(
      pokemon => 
        pokemon.Data.length === 1 && 
        pokemon.Data[0].index !== targetPokemon.Data[0].index &&
        !blacklistedPokemon.some(bp => bp.Data[0].index === pokemon.Data[0].index)
    );

    return availablePokemon
      .sort((a, b) => {
        const aScore = calculateCounterScore(a.Data[0], targetPokemon.Data[0], teraType);
        const bScore = calculateCounterScore(b.Data[0], targetPokemon.Data[0], teraType);
        return bScore - aScore;
      })
      .slice(0, 5);
  };

  if (!selectedPokemon || !selectedTeraType) {
    return null;
  }

  return (
    <div className="calculated-odds">
      <h2>Best Counters</h2>
      <table>
        <thead>
          <tr>
            <th>Pokemon</th>
            <th>Types</th>
            <th>DEF</th>
            <th>Sp.DEF</th>
            <th>ATK</th>
            <th>Sp.ATK</th>
            <th>Speed</th>
            <th>HP</th>
          </tr>
        </thead>
        <tbody id="best-mons">
          {bestCounters.map(pokemon => (
            <tr key={pokemon.Data[0].index} className="best-mon-containers">
              <td>
                {pokemon.Data[0].PokeName}
                <img 
                  src={pokemon.Data[0].PokeSpriteUrl} 
                  alt={pokemon.Data[0].PokeName}
                  className="suggested-mon-img"
                />
              </td>
              <td>
                <div>{pokemon.Data[0].PokeType1}</div>
                {pokemon.Data[0].PokeType2 && <div>{pokemon.Data[0].PokeType2}</div>}
              </td>
              <td>{pokemon.Data[0].statsDef}</td>
              <td>{pokemon.Data[0].statsSpDef}</td>
              <td>{pokemon.Data[0].statsAtk}</td>
              <td>{pokemon.Data[0].statsSpAtk}</td>
              <td>{pokemon.Data[0].statsSpd}</td>
              <td>{pokemon.Data[0].statsHP}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}; 