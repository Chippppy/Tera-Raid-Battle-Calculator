import pokeNames from '../Resources/Pokemon.json';
import React from 'react';

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

  pokeNames.forEach(pokemon => {
    let htmlString = ""

    if(pokemon['index'] < 10) {
      htmlString = "<li><div class='PokemonList'>"+ pokemon['PokeName'] +"</div></li>";
    } else {
      htmlString = "<li style='display:none'><div class='PokemonList'>"+ pokemon['PokeName'] +"</div></li>";
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
      if(i < 9) {
        li[i].style.display = "";
      } else {
        li[i].style.display = "none";
      }
    }
  } else {
    let screenShow = 0;
    for (i = 0; i < li.length; i++) {
      if(screenShow === 9) break;

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
    console.log(selectedMon.innerText);
  }

  Array.from(elements).forEach(function(element) {
    element.addEventListener('click', callBackFunc);
  });
}



export { ChoosePokemonForm }