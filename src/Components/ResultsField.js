import React from 'react'

//ICON IMPORTS BECAUSE REACT IS WACK
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

const ResultsField = () => {

  const data = (
    <>
      <div className="container-resultsField">
        <div className="ChosenPokemon">
          <h2>Pokemon</h2>
          <div id='chosenPokeSprite' className='selectedMon'></div>
          <div id='chosenPokeName' className='selectedMon'></div>
          <div id='chosenPokeType1' className='selectedMon'></div>
          <div id='chosenPokeType2' className='selectedMon'></div>
        </div>
        <div className="ChosenTeraType">
          <h2>TeraType</h2>
          <div id='chosenTeraTypeSprite'></div>
          <div id='chosenTeraTypeName'></div>
        </div>
      </div>
    </>
  )

  return data;
}

const fillResults = (pokeObj) => {
  console.log(pokeObj);

  let chosenPokeSprite = document.getElementById("chosenPokeSprite");
  let chosenPokeName = document.getElementById('chosenPokeName');
  let chosenPokeType1 = document.getElementById('chosenPokeType1');
  let chosenPokeType2 = document.getElementById('chosenPokeType2');

  chosenPokeSprite.innerHTML = "<img src='" + pokeObj[1] + "'/>";

  chosenPokeName.innerHTML = "<h4>" + pokeObj[0] + "</h4>";

  chosenPokeType1.innerHTML = getTypeHTML(pokeObj[2]);

  chosenPokeType2.innerHTML = getTypeHTML(pokeObj[3]);
}

const getTypeHTML = (type) => {
  var responseHTML;
  switch (type) {
    case 'NORMAL':
      responseHTML = '<h4>NORMAL</h4><img src="' + normalIcon + '"/>';
      break;
    case 'FIGHTING':
      responseHTML = '<h4>FIGHTING</h4><img src="' + fightingIcon + '"/>';
      break;
    case 'FLYING':
      responseHTML = '<h4>FLYING</h4><img src="' + flyingIcon + '"/>';
      break;
    case 'POISON':
      responseHTML = '<h4>POISON</h4><img src="' + poisonIcon + '"/>';
      break;
    case 'GROUND':
      responseHTML = '<h4>GROUND</h4><img src="' + groundIcon + '"/>';
      break;
    case 'ROCK':
      responseHTML = '<h4>ROCK</h4><img src="' + rockIcon + '"/>';
      break;
    case 'BUG':
      responseHTML = '<h4>BUG</h4><img src="' + bugIcon + '"/>';
      break;
    case 'GHOST':
      responseHTML = '<h4>GHOST</h4><img src="' + ghostIcon + '"/>';
      break;
    case 'STEEL':
      responseHTML = '<h4>STEEL</h4><img src="' + steelIcon + '"/>';
      break;
    case 'FIRE':
      responseHTML = '<h4>FIRE</h4><img src="' + fireIcon + '"/>';
      break;
    case 'WATER':
      responseHTML = '<h4>WATER</h4><img src="' + waterIcon + '"/>';
      break;
    case 'GRASS':
      responseHTML = '<h4>GRASS</h4><img src="' + grassIcon + '"/>';
      break;
    case 'ELECTRIC':
      responseHTML = '<h4>ELECTRIC</h4><img src="' + electricIcon + '"/>';
      break;
    case 'PSYCHIC':
      responseHTML = '<h4>PSYCHIC</h4><img src="' + psychicIcon + '"/>';
      break;
    case 'ICE':
      responseHTML = '<h4>ICE</h4><img src="' + iceIcon + '"/>';
      break;
    case 'DRAGON':
      responseHTML = '<h4>DRAGON</h4><img src="' + dragonIcon + '"/>';
      break;
    case 'DARK':
      responseHTML = '<h4>DARK</h4><img src="' + darkIcon + '"/>';
      break;
    case 'FAIRY':
      responseHTML = '<h4>FAIRY</h4><img src="' + fairyIcon + '"/>';
      break;
    default:
      responseHTML = '<h4>N/A</h4>';
  }
  return responseHTML;
}

export { ResultsField, fillResults }