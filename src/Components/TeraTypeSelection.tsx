import React from "react";
import BUG from "../Resources/TypeIcons/pokemon_type_icons_bug.png";
import DRAGON from "../Resources/TypeIcons/pokemon_type_icons_dragon.png";
import ELECTRIC from "../Resources/TypeIcons/pokemon_type_icons_electric.png";
import FAIRY from "../Resources/TypeIcons/pokemon_type_icons_fairy.png";
import FIGHTING from "../Resources/TypeIcons/pokemon_type_icons_fighting.png";
import FIRE from "../Resources/TypeIcons/pokemon_type_icons_fire.png";
import FLYING from "../Resources/TypeIcons/pokemon_type_icons_flying.png";
import GHOST from "../Resources/TypeIcons/pokemon_type_icons_ghost.png";
import GRASS from "../Resources/TypeIcons/pokemon_type_icons_grass.png";
import GROUND from "../Resources/TypeIcons/pokemon_type_icons_ground.png";
import ICE from "../Resources/TypeIcons/pokemon_type_icons_ice.png";
import NORMAL from "../Resources/TypeIcons/pokemon_type_icons_normal.png";
import POISON from "../Resources/TypeIcons/pokemon_type_icons_poison.png";
import PSYCHIC from "../Resources/TypeIcons/pokemon_type_icons_psychic.png";
import ROCK from "../Resources/TypeIcons/pokemon_type_icons_rock.png";
import STEEL from "../Resources/TypeIcons/pokemon_type_icons_steel.png";
import WATER from "../Resources/TypeIcons/pokemon_type_icons_water.png";
import DARK from "../Resources/TypeIcons/pokemon_type_icons_dark.png";

interface TeraTypeSelectionProps {
  onTeraTypeSelect: (type: string) => void;
}

const TERA_TYPES = [
  "NORMAL",
  "FIGHTING",
  "FLYING",
  "POISON",
  "GROUND",
  "ROCK",
  "BUG",
  "GHOST",
  "STEEL",
  "FIRE",
  "WATER",
  "GRASS",
  "ELECTRIC",
  "PSYCHIC",
  "ICE",
  "DRAGON",
  "DARK",
  "FAIRY",
];

export const TeraTypeSelection: React.FC<TeraTypeSelectionProps> = ({
  onTeraTypeSelect,
}) => {
  return (
    <div>
      <h3>Select Tera Type</h3>
      <div className="tera-type-grid">
        {TERA_TYPES.map((type) => (
          <div
            key={type}
            className="tera-type-item"
            onClick={() => onTeraTypeSelect(type)}
          >
            <div>{type}</div>
            <img
              src={
                type === "BUG"
                  ? BUG
                  : type === "DRAGON"
                  ? DRAGON
                  : type === "ELECTRIC"
                  ? ELECTRIC
                  : type === "FAIRY"
                  ? FAIRY
                  : type === "FIGHTING"
                  ? FIGHTING
                  : type === "FIRE"
                  ? FIRE
                  : type === "FLYING"
                  ? FLYING
                  : type === "GHOST"
                  ? GHOST
                  : type === "GRASS"
                  ? GRASS
                  : type === "GROUND"
                  ? GROUND
                  : type === "ICE"
                  ? ICE
                  : type === "NORMAL"
                  ? NORMAL
                  : type === "POISON"
                  ? POISON
                  : type === "PSYCHIC"
                  ? PSYCHIC
                  : type === "ROCK"
                  ? ROCK
                  : type === "STEEL"
                  ? STEEL
                  : type === "WATER"
                  ? WATER
                  : type === "DARK"
                  ? DARK
                  : ""
              }
              alt={`${type} type`}
              className="teraTypeIconImg"
            />
          </div>
        ))}
      </div>
    </div>
  );
};
