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

import { findBestPokemons } from './CalculatedOdds';
import { tab } from '@testing-library/user-event/dist/tab';

const ResultsField = () => {

  const data = (
    <>
      <div className="container-resultsField">
        <div className="ChosenPokemon">
          <h2>Chosen Pokemon</h2>
          <div id='chosenPokeSprite' className='selectedMon'></div>
          <div id='chosenPokeName' className='selectedMon'></div>
          <div id='chosenPokeType1' className='selectedMon'></div>
          <div id='chosenPokeType2' className='selectedMon'></div>
        </div>
        <div className="ChosenTeraType">
          <h2>Chosen TeraType</h2>
          <div id='chosenTeraType' className='selectedType'></div>
        </div>
      </div>
    </>
  )

  return data;
}

const fillTypeResults = (teraType) => {
  document.getElementById("chosenTeraType").innerHTML = getTypeHTML(teraType.toUpperCase(), true);
  checkResultsAvailable();
}

const fillPokeResults = (pokeObj) => {
  let chosenPokeSprite = document.getElementById("chosenPokeSprite");
  let chosenPokeName = document.getElementById('chosenPokeName');
  let chosenPokeType1 = document.getElementById('chosenPokeType1');
  let chosenPokeType2 = document.getElementById('chosenPokeType2');

  chosenPokeSprite.innerHTML = "<img src='" + pokeObj[1] + "'>";

  chosenPokeName.innerHTML = '<h4 id="chosenPokeName-name">' + pokeObj[0] + "</h4>";

  chosenPokeType1.innerHTML = getTypeHTML(pokeObj[2], false);

  chosenPokeType2.innerHTML = getTypeHTML(pokeObj[3], false);
  checkResultsAvailable();
}

const getTypeHTML = (type, teraBool) => {
  var responseHTML;
  switch (type) {
    case 'NORMAL':
      responseHTML = '<h4>NORMAL</h4><img src="' + normalIcon + '" class="teraTypeIconImg">';
      break;
    case 'FIGHTING':
      responseHTML = '<h4>FIGHTING</h4><img src="' + fightingIcon + '" class="teraTypeIconImg">';
      break;
    case 'FLYING':
      responseHTML = '<h4>FLYING</h4><img src="' + flyingIcon + '" class="teraTypeIconImg">';
      break;
    case 'POISON':
      responseHTML = '<h4>POISON</h4><img src="' + poisonIcon + '" class="teraTypeIconImg">';
      break;
    case 'GROUND':
      responseHTML = '<h4>GROUND</h4><img src="' + groundIcon + '" class="teraTypeIconImg">';
      break;
    case 'ROCK':
      responseHTML = '<h4>ROCK</h4><img src="' + rockIcon + '" class="teraTypeIconImg">';
      break;
    case 'BUG':
      responseHTML = '<h4>BUG</h4><img src="' + bugIcon + '" class="teraTypeIconImg">';
      break;
    case 'GHOST':
      responseHTML = '<h4>GHOST</h4><img src="' + ghostIcon + '" class="teraTypeIconImg">';
      break;
    case 'STEEL':
      responseHTML = '<h4>STEEL</h4><img src="' + steelIcon + '" class="teraTypeIconImg">';
      break;
    case 'FIRE':
      responseHTML = '<h4>FIRE</h4><img src="' + fireIcon + '" class="teraTypeIconImg">';
      break;
    case 'WATER':
      responseHTML = '<h4>WATER</h4><img src="' + waterIcon + '" class="teraTypeIconImg">';
      break;
    case 'GRASS':
      responseHTML = '<h4>GRASS</h4><img src="' + grassIcon + '" class="teraTypeIconImg">';
      break;
    case 'ELECTRIC':
      responseHTML = '<h4>ELECTRIC</h4><img src="' + electricIcon + '" class="teraTypeIconImg">';
      break;
    case 'PSYCHIC':
      responseHTML = '<h4>PSYCHIC</h4><img src="' + psychicIcon + '" class="teraTypeIconImg">';
      break;
    case 'ICE':
      responseHTML = '<h4>ICE</h4><img src="' + iceIcon + '" class="teraTypeIconImg">';
      break;
    case 'DRAGON':
      responseHTML = '<h4>DRAGON</h4><img src="' + dragonIcon + '" class="teraTypeIconImg">';
      break;
    case 'DARK':
      responseHTML = '<h4>DARK</h4><img src="' + darkIcon + '" class="teraTypeIconImg">';
      break;
    case 'FAIRY':
      responseHTML = '<h4>FAIRY</h4><img src="' + fairyIcon + '" class="teraTypeIconImg">';
      break;
    default:
      responseHTML = '<h4>N/A</h4>';
  }
  if(teraBool) {
    responseHTML = responseHTML.split("<h4>");
    responseHTML = '<h4 id="chosenTeraType-name">'+responseHTML[1];
  } else {
    responseHTML = responseHTML.split("<h4>");
    responseHTML = '<h4 class="chosenPokeType-name">'+responseHTML[1];
  }
  return responseHTML;
}

const checkResultsAvailable = () => {
  let teraTypeResult = document.getElementById("chosenTeraType-name");
  let pokeNameResult = document.getElementById("chosenPokeName-name");

  if(teraTypeResult && pokeNameResult) {
    let bestMonsArray = findBestPokemons(teraTypeResult.innerText, pokeNameResult.innerText.split(":")[1].split(" -")[0]);
    console.log(bestMonsArray);
    let resultsField = document.getElementById("best-mons");

    let tableString = "";
    bestMonsArray.forEach(mon => {
      let pokeName = mon.Data[0].PokeName;
      let spriteURL = mon.Data[0].PokeSpriteUrl;
      let type1 = mon.Data[0].PokeType1;
      let type2 = mon.Data[0].PokeType2;
      let defence = mon.Data[0].statsDef;
      let spDef = mon.Data[0].statsSpDef;
      let attack = mon.Data[0].statsAtk;
      let spAtk = mon.Data[0].statsSpAtk;
      let speed = mon.Data[0].statsSpd;
      let hp = mon.Data[0].statsHP;

      tableString = tableString + `
      <tr class='best-mon-containers'>
        <td>`+ pokeName +` <img src=`+ spriteURL +` alt="Pokemon Sprite" class='suggested-mon-img'/></td>
        <td>`+getTypeHTML(type1,false)+getTypeHTML(type2,false)+`</td>
        <td>`+defence+`</td>
        <td>`+spDef+`</td>
        <td>`+attack+`</td>
        <td>`+spAtk+`</td>
        <td>`+speed+`</td>
        <td>`+hp+`</td>
      </tr>
      `
    })
    resultsField.innerHTML = tableString;
  } else {
    console.log("Sometihng missing...");
  }
}

export { ResultsField, fillPokeResults, fillTypeResults }