import React from 'react';
import normalIcon from '../Resources/TypeIcons/pokemon_type_icons_normal.png';
import fightingIcon from '../Resources/TypeIcons/pokemon_type_icons_fighting.png';
import flyingIcon from '../Resources/TypeIcons/pokemon_type_icons_flying.png';
import poisonIcon from '../Resources/TypeIcons/pokemon_type_icons_poison.png';
import groundIcon from '../Resources/TypeIcons/pokemon_type_icons_ground.png';
import rockIcon from '../Resources/TypeIcons/pokemon_type_icons_rock.png';
import bugIcon from '../Resources/TypeIcons/pokemon_type_icons_bug.png';
import ghostIcon from '../Resources/TypeIcons/pokemon_type_icons_ghost.png';
import steelIcon from '../Resources/TypeIcons/pokemon_type_icons_steel.png';
import fireIcon from '../Resources/TypeIcons/pokemon_type_icons_fire.png';
import waterIcon from '../Resources/TypeIcons/pokemon_type_icons_water.png';
import grassIcon from '../Resources/TypeIcons/pokemon_type_icons_grass.png';
import electricIcon from '../Resources/TypeIcons/pokemon_type_icons_electric.png';
import psychicIcon from '../Resources/TypeIcons/pokemon_type_icons_psychic.png';
import iceIcon from '../Resources/TypeIcons/pokemon_type_icons_ice.png';
import dragonIcon from '../Resources/TypeIcons/pokemon_type_icons_dragon.png';
import darkIcon from '../Resources/TypeIcons/pokemon_type_icons_dark.png';
import fairyIcon from '../Resources/TypeIcons/pokemon_type_icons_fairy.png';

interface PokemonData {
  index: number;
  PokeNum: number;
  PokeName: string;
  PokeType1: string;
  PokeType2: string | null;
  PokeSpriteUrl: string;
  statsTotal: number;
  statsHP: number;
  statsAtk: number;
  statsDef: number;
  statsSpAtk: number;
  statsSpDef: number;
  statsSpd: number;
}

interface Pokemon {
  Data: [PokemonData];
  index: number;
  count: number;
}

interface ResultsFieldProps {
  selectedPokemon: Pokemon | null;
  selectedTeraType: string | null;
}

const typeIcons: { [key: string]: string } = {
  NORMAL: normalIcon,
  FIGHTING: fightingIcon,
  FLYING: flyingIcon,
  POISON: poisonIcon,
  GROUND: groundIcon,
  ROCK: rockIcon,
  BUG: bugIcon,
  GHOST: ghostIcon,
  STEEL: steelIcon,
  FIRE: fireIcon,
  WATER: waterIcon,
  GRASS: grassIcon,
  ELECTRIC: electricIcon,
  PSYCHIC: psychicIcon,
  ICE: iceIcon,
  DRAGON: dragonIcon,
  DARK: darkIcon,
  FAIRY: fairyIcon,
};

export const ResultsField: React.FC<ResultsFieldProps> = ({ selectedPokemon, selectedTeraType }) => {
  const getTypeDisplay = (type: string | null) => {
    if (!type) return <h4>N/A</h4>;
    
    const icon = typeIcons[type];
    if (!icon) return <h4>N/A</h4>;

    return (
      <>
        <h4 className="chosenPokeType-name">{type}</h4>
        <img src={icon} alt={`${type} type`} className="teraTypeIconImg" />
      </>
    );
  };

  return (
    <div className="container-resultsField">
      <div className="ChosenPokemon">
        <h2>Chosen Pokemon</h2>
        <div className="selectedMon">
          <div>
            {selectedPokemon && (
              <img src={selectedPokemon.Data[0].PokeSpriteUrl} alt={selectedPokemon.Data[0].PokeName} />
            )}
          </div>
          <div>
            {selectedPokemon && (
              <h4>{`ID:${selectedPokemon.Data[0].index} - ${selectedPokemon.Data[0].PokeName}`}</h4>
            )}
          </div>
        </div>
        <div className="selectedMon">
          {selectedPokemon && getTypeDisplay(selectedPokemon.Data[0].PokeType1)}
        </div>
        <div className="selectedMon">
          {selectedPokemon && getTypeDisplay(selectedPokemon.Data[0].PokeType2)}
        </div>
      </div>
      <div className="ChosenTeraType">
        <h2>Chosen TeraType</h2>
        <div className="selectedType">
          {selectedTeraType && (
            <>
              <h4 id="chosenTeraType-name">{selectedTeraType}</h4>
              <img 
                src={typeIcons[selectedTeraType]} 
                alt={`${selectedTeraType} type`} 
                className="teraTypeIconImg" 
              />
            </>
          )}
        </div>
      </div>
    </div>
  );
}; 