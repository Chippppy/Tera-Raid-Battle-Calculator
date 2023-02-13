import React from 'react';

import pokeJSON from '../Resources/Pokemon.json';
import { fillPokeResults } from './ResultsField';

const ChoosePokemonForm = () => {

  const data = (
    <>
      <div id="container-ChoosePokemonForm">
        <input type="text" onKeyUp={(e) => searchMons(e)} id="myInput" placeholder="Search for Pokemon..." />

        <ul id="myUL">
          
        </ul>
      </div>
    </>
  )
  return data
}

const populateForm = () => {
  const myUL = document.getElementById("myUL");

  pokeJSON.forEach(pokemon => {
    let htmlString = ""

    if(pokemon['Data'][0]['index'] < 14) {
      htmlString = "<li><div class='PokemonList' id='"+pokemon['Data'][0]['index']+"'>"+ pokemon['Data'][0]['PokeNum'] + " : " + pokemon['Data'][0]['PokeName'] +"</div></li>";
    } else {
      htmlString = "<li style='display:none'><div class='PokemonList' id='"+pokemon['Data'][0]['index']+"'>"+ pokemon['Data'][0]['PokeNum'] + " : " + pokemon['Data'][0]['PokeName'] +"</div></li>";
    }

    myUL.innerHTML = myUL.innerHTML + htmlString;
  });
}

window.addEventListener('DOMContentLoaded', (event) => {
  populateForm();
  addEvents();
})

const searchMons = (e) => {
  console.log("Search conducted, error..." + e);

  var input, filter, ul, li, div, i, txtValue;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  ul = document.getElementById("myUL");
  li = ul.getElementsByTagName("li");

  if(input.value === '') {
    for (i = 0; i < li.length; i++) {
      if(i < 13) {
        li[i].style.display = "";
      } else {
        li[i].style.display = "none";
      }
    }
  } else {
    let screenShow = 0;
    for (i = 0; i < li.length; i++) {
      if(screenShow === 13) break;

      div = li[i].getElementsByTagName("div")[0];
      txtValue = div.textContent || div.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        li[i].style.display = "";
        screenShow += 1;
      } else {
        li[i].style.display = "none";
      }
    }
  }
}

//POKEMON IS SELECETED FROM THE LIST :)
const addEvents = () => {
  var elements = document.getElementsByClassName("PokemonList");

  const callBackFunc = (e) => {
    var selectedMon = e.currentTarget;
    populateChosenPokemon(selectedMon.id);
  }

  Array.from(elements).forEach(function(element) {
    element.addEventListener('click', callBackFunc);
  });
}

const populateChosenPokemon = (pokeId) => {
  var pokeSprite, pokeName, pokeType1, pokeType2;
  
  pokeSprite = pokeJSON[pokeId]['Data'][0]['PokeSpriteUrl'];
  pokeName = pokeJSON[pokeId]['Data'][0]['PokeName'];
  pokeType1 = pokeJSON[pokeId]['Data'][0]['PokeType1'];
  if(pokeJSON[pokeId]['Data'][0]['PokeType2']) {
    pokeType2 = pokeJSON[pokeId]['Data'][0]['PokeType2'];
  } else {
    pokeType2 = "N/A";
  }
  
  const pokeObj = [
    "ID:"+pokeId+" - "+pokeName,
    pokeSprite,
    pokeType1,
    pokeType2,
  ];

  fillPokeResults(pokeObj);
} 

export { ChoosePokemonForm }