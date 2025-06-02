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

interface TeraTypeTableProps {
  onTeraTypeSelect: (type: string) => void;
}

const typeIcons = [
  { type: 'NORMAL', icon: normalIcon },
  { type: 'FIGHTING', icon: fightingIcon },
  { type: 'FLYING', icon: flyingIcon },
  { type: 'POISON', icon: poisonIcon },
  { type: 'GROUND', icon: groundIcon },
  { type: 'ROCK', icon: rockIcon },
  { type: 'BUG', icon: bugIcon },
  { type: 'GHOST', icon: ghostIcon },
  { type: 'STEEL', icon: steelIcon },
  { type: 'FIRE', icon: fireIcon },
  { type: 'WATER', icon: waterIcon },
  { type: 'GRASS', icon: grassIcon },
  { type: 'ELECTRIC', icon: electricIcon },
  { type: 'PSYCHIC', icon: psychicIcon },
  { type: 'ICE', icon: iceIcon },
  { type: 'DRAGON', icon: dragonIcon },
  { type: 'DARK', icon: darkIcon },
  { type: 'FAIRY', icon: fairyIcon },
];

export const ChooseTeraTypeTable: React.FC<TeraTypeTableProps> = ({ onTeraTypeSelect }) => {
  return (
    <div className="tera-type-grid">
      {typeIcons.map(({ type, icon }) => (
        <div
          key={type}
          className="tera-type-item"
          onClick={() => onTeraTypeSelect(type)}
        >
          <h4>{type}</h4>
          <img src={icon} alt={`${type} type`} className="teraTypeIconImg" />
        </div>
      ))}
    </div>
  );
}; 