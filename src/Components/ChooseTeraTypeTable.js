import React from 'react';

import { fillTypeResults } from './ResultsField';

const ChooseTeraTypeTable = () => {

  const data = (
    <>
      <div id="container-ChooseTeraTypeTable">
        <div className="grid-container-pokeType">
          <div className="container-pokeTypeIcon"><button onClick={() => fillTypeResults('Normal')}><img src={require("../Resources/TypeIcons/pokemon_type_icons_normal.png")} alt="Normal"/></button></div>
          <div className="container-pokeTypeIcon"><button onClick={() => fillTypeResults('Fighting')}><img src={require("../Resources/TypeIcons/pokemon_type_icons_fighting.png")} alt="Fighting"/></button></div>
          <div className="container-pokeTypeIcon"><button onClick={() => fillTypeResults('Flying')}><img src={require("../Resources/TypeIcons/pokemon_type_icons_flying.png")} alt="Flying"/></button></div>
          <div className="container-pokeTypeIcon"><button onClick={() => fillTypeResults('Poison')}><img src={require("../Resources/TypeIcons/pokemon_type_icons_poison.png")} alt="Poison"/></button></div>
          <div className="container-pokeTypeIcon"><button onClick={() => fillTypeResults('Ground')}><img src={require("../Resources/TypeIcons/pokemon_type_icons_ground.png")} alt="Ground"/></button></div>
          <div className="container-pokeTypeIcon"><button onClick={() => fillTypeResults('Rock')}><img src={require("../Resources/TypeIcons/pokemon_type_icons_rock.png")} alt="Rock"/></button></div>
          <div className="container-pokeTypeIcon"><button onClick={() => fillTypeResults('Bug')}><img src={require("../Resources/TypeIcons/pokemon_type_icons_bug.png")} alt="Bug"/></button></div>
          <div className="container-pokeTypeIcon"><button onClick={() => fillTypeResults('Ghost')}><img src={require("../Resources/TypeIcons/pokemon_type_icons_ghost.png")} alt="Ghost"/></button></div>
          <div className="container-pokeTypeIcon"><button onClick={() => fillTypeResults('Steel')}><img src={require("../Resources/TypeIcons/pokemon_type_icons_steel.png")} alt="Steel"/></button></div>
          <div className="container-pokeTypeIcon"><button onClick={() => fillTypeResults('Fire')}><img src={require("../Resources/TypeIcons/pokemon_type_icons_fire.png")} alt="Fire"/></button></div>
          <div className="container-pokeTypeIcon"><button onClick={() => fillTypeResults('Water')}><img src={require("../Resources/TypeIcons/pokemon_type_icons_water.png")} alt="Water"/></button></div>
          <div className="container-pokeTypeIcon"><button onClick={() => fillTypeResults('Grass')}><img src={require("../Resources/TypeIcons/pokemon_type_icons_grass.png")} alt="Grass"/></button></div>
          <div className="container-pokeTypeIcon"><button onClick={() => fillTypeResults('Electric')}><img src={require("../Resources/TypeIcons/pokemon_type_icons_electric.png")} alt="Electric"/></button></div>
          <div className="container-pokeTypeIcon"><button onClick={() => fillTypeResults('Psychic')}><img src={require("../Resources/TypeIcons/pokemon_type_icons_psychic.png")} alt="Psychic"/></button></div>
          <div className="container-pokeTypeIcon"><button onClick={() => fillTypeResults('Ice')}><img src={require("../Resources/TypeIcons/pokemon_type_icons_ice.png")} alt="Ice"/></button></div>
          <div className="container-pokeTypeIcon"><button onClick={() => fillTypeResults('Dragon')}><img src={require("../Resources/TypeIcons/pokemon_type_icons_dragon.png")} alt="Dragon"/></button></div>
          <div className="container-pokeTypeIcon"><button onClick={() => fillTypeResults('Dark')}><img src={require("../Resources/TypeIcons/pokemon_type_icons_dark.png")} alt="Dark"/></button></div>
          <div className="container-pokeTypeIcon"><button onClick={() => fillTypeResults('Fairy')}><img src={require("../Resources/TypeIcons/pokemon_type_icons_fairy.png")} alt="Fairy"/></button></div>
        </div>
      </div>
    </>
  )

  return data;
}

export { ChooseTeraTypeTable }