import React from 'react';

const ChooseTeraTypeTable = () => {

  const data = (
    <>
      <div id="container-ChooseTeraTypeTable">
        <div className="grid-container-pokeType">
          <a href="/"><div className="container-pokeTypeIcon"><img src={require("../Resources/TypeIcons/pokemon_type_icons_normal.png")} alt="Normal"/></div></a>
          <a href="/"><div className="container-pokeTypeIcon"><img src={require("../Resources/TypeIcons/pokemon_type_icons_fighting.png")} alt="Fighting"/></div></a>
          <a href="/"><div className="container-pokeTypeIcon"><img src={require("../Resources/TypeIcons/pokemon_type_icons_flying.png")} alt="Flying"/></div></a>
          <a href="/"><div className="container-pokeTypeIcon"><img src={require("../Resources/TypeIcons/pokemon_type_icons_poison.png")} alt="Poison"/></div></a>
          <a href="/"><div className="container-pokeTypeIcon"><img src={require("../Resources/TypeIcons/pokemon_type_icons_ground.png")} alt="Ground"/></div></a>
          <a href="/"><div className="container-pokeTypeIcon"><img src={require("../Resources/TypeIcons/pokemon_type_icons_rock.png")} alt="Rock"/></div></a>
          <a href="/"><div className="container-pokeTypeIcon"><img src={require("../Resources/TypeIcons/pokemon_type_icons_bug.png")} alt="Bug"/></div></a>
          <a href="/"><div className="container-pokeTypeIcon"><img src={require("../Resources/TypeIcons/pokemon_type_icons_ghost.png")} alt="Ghost"/></div></a>
          <a href="/"><div className="container-pokeTypeIcon"><img src={require("../Resources/TypeIcons/pokemon_type_icons_steel.png")} alt="Steel"/></div></a>
          <a href="/"><div className="container-pokeTypeIcon"><img src={require("../Resources/TypeIcons/pokemon_type_icons_fire.png")} alt="Fire"/></div></a>
          <a href="/"><div className="container-pokeTypeIcon"><img src={require("../Resources/TypeIcons/pokemon_type_icons_water.png")} alt="Water"/></div></a>
          <a href="/"><div className="container-pokeTypeIcon"><img src={require("../Resources/TypeIcons/pokemon_type_icons_grass.png")} alt="Grass"/></div></a>
          <a href="/"><div className="container-pokeTypeIcon"><img src={require("../Resources/TypeIcons/pokemon_type_icons_electric.png")} alt="Electric"/></div></a>
          <a href="/"><div className="container-pokeTypeIcon"><img src={require("../Resources/TypeIcons/pokemon_type_icons_psychic.png")} alt="Psychic"/></div></a>
          <a href="/"><div className="container-pokeTypeIcon"><img src={require("../Resources/TypeIcons/pokemon_type_icons_ice.png")} alt="Ice"/></div></a>
          <a href="/"><div className="container-pokeTypeIcon"><img src={require("../Resources/TypeIcons/pokemon_type_icons_dragon.png")} alt="Dragon"/></div></a>
          <a href="/"><div className="container-pokeTypeIcon"><img src={require("../Resources/TypeIcons/pokemon_type_icons_dark.png")} alt="Dark"/></div></a>
          <a href="/"><div className="container-pokeTypeIcon"><img src={require("../Resources/TypeIcons/pokemon_type_icons_fairy.png")} alt="Fairy"/></div></a>
        </div>
      </div>
    </>
  )

  return data;
}

export { ChooseTeraTypeTable }