import { ChoosePokemonForm } from "../Components/ChoosePokemonForm";
import { ChooseTeraTypeTable } from "../Components/ChooseTeraTypeTable";
import { ResultsField } from "../Components/ResultsField";
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
        <ResultsField/>
      </div>
    </>
  )

  return info;
}



export default Main;