import { ChoosePokemonForm } from "../Components/ChoosePokemonForm";
import { ChooseTeraTypeTable } from "../Components/ChooseTeraTypeTable";
import { ResultsField } from "../Components/ResultsField";
import { CalculatedOdds } from "../Components/CalculatedOdds";
import React from 'react';

const Main = () => {

  const info = (
    <>
      <div>
        <div className="grid-container-selection">
          <div className="grid-item">
            <h2>Choose Pokemon</h2>
            <ChoosePokemonForm />
          </div>
          <div className="grid-item">
            <h2>Choose TeraType</h2>
            <ChooseTeraTypeTable />
          </div>
        </div>
        <div className="grid-container-results">
          <ResultsField />
          <CalculatedOdds />
        </div>
      </div>
    </>
  )

  return info;
}



export default Main;