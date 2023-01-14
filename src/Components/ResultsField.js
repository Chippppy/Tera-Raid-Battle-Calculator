import React from 'react'

const ResultsField = () => {

  const data = (
    <>
      <div className="container-resultsField">
        <div className="ChosenPokemon">
          <h2>Pokemon</h2>
          <div id='chosenPokeSprite'></div>
          <div id='chosenPokeName'></div>
          <div id='chosenPokeType'></div>
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

export { ResultsField }