import React from "react"

const pokemonData = require('../Resources/Pokemon.json');
const typeWeaknesses = require('../Resources/TypeWeakness.json');

const CalculatedOdds = () => {

  const data = (
    <>
      <div className="grid-container-suggestedMons">
        <table className="table-suggestedMons">
          <thead>
            <tr>
              <th>Pokemon</th>
              <th>Types</th>
              <th>Defence</th>
              <th>Sp.Def</th>
              <th>Attack</th>
              <th>Sp.Atk</th>
              <th>Speed</th>
              <th>HP</th>
            </tr>
          </thead>
          <tbody className="best-mons" id="best-mons">
          </tbody>
        </table>
      </div>
    </>
  )

  return data;
}

// Function to find the best 5 Pokémon that are strong against the chosen Pokémon
function findBestPokemons(type, index) {
  // Find the chosen Pokémon
  const chosenPokemon = pokemonData.find(pokemon => pokemon.index == index)
  console.log(chosenPokemon);
  // Get the weaknesses of the chosen Pokémon's type
  const weaknesses = typeWeaknesses[type] ? Object.values(typeWeaknesses[type]) : [];
  console.log(weaknesses);
  // Compare Special Attack vs. Attack statistic of the chosen Pokémon
  const isSpecialAttackHigher = chosenPokemon.Data[0].statsSpAtk > chosenPokemon.Data[0].statsAtk;

  // Filter Pokémon based on type advantages, higher total stats, and statsTotal constraint
  const bestPokemons = pokemonData
    .filter(pokemon => {
      const pokemonType1 = pokemon.Data[0].PokeType1;
      const pokemonType2 = pokemon.Data[0].PokeType2;
      const weaknessesType1 = typeWeaknesses[pokemonType1] ? Object.values(typeWeaknesses[pokemonType1]) : [];
      const weaknessesType2 = typeWeaknesses[pokemonType2] ? Object.values(typeWeaknesses[pokemonType2]) : [];
      return (
        (Object.values(weaknesses).includes(pokemonType1) || Object.values(weaknesses).includes(pokemonType2)) &&
        !(Object.values(weaknessesType1).includes(chosenPokemon.Data[0].PokeType1) || Object.values(weaknessesType2).includes(chosenPokemon.Data[0].PokeType1)) &&
        !(Object.values(weaknessesType1).includes(chosenPokemon.Data[0].PokeType2) || Object.values(weaknessesType2).includes(chosenPokemon.Data[0].PokeType2)) &&
        pokemon.Data[0].statsTotal <= 600 && // Filter Pokémon with statsTotal less than 600
        !pokemon.Data[0].PokeName.includes("Mega")
      );
    })
    .sort((a, b) => {
      // Compare the statistics based on Special Attack vs. Attack
      if (isSpecialAttackHigher) {
        return (
          b.Data[0].statsTotal - a.Data[0].statsTotal ||
          b.Data[0].statsSpDef - a.Data[0].statsSpDef ||
          b.Data[0].statsSpAtk - a.Data[0].statsSpAtk ||
          b.Data[0].statsDef - a.Data[0].statsDef ||
          b.Data[0].statsSpd - a.Data[0].statsSpd ||
          b.Data[0].statsHP - a.Data[0].statsHP
        );
      } else {
        return (
          b.Data[0].statsTotal - a.Data[0].statsTotal ||
          b.Data[0].statsDef - a.Data[0].statsDef ||
          b.Data[0].statsAtk - a.Data[0].statsAtk ||
          b.Data[0].statsSpAtk - a.Data[0].statsSpAtk ||
          b.Data[0].statsSpDef - a.Data[0].statsSpDef ||
          b.Data[0].statsSpd - a.Data[0].statsSpd ||
          b.Data[0].statsHP - a.Data[0].statsHP
        );
      }
    })
    .slice(0, 5);

  // Return the best 5 Pokémon
  return bestPokemons;
}


export { CalculatedOdds, findBestPokemons }