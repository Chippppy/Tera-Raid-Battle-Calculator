import React from 'react'

const ResultsField = () => {

  const data = (
    <>
      <div className="container-resultsField">
        <div className="ChosenPokemon">
          <h2>Pokemon</h2>
        </div>
        <div className="ChosenTeraType">
          <h2>TeraType</h2>
        </div>
      </div>
    </>
  )

  return data;
}

export { ResultsField }