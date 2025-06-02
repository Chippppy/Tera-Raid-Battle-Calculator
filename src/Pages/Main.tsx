import React, { useState } from 'react';
import { ChoosePokemonForm } from "../Components/ChoosePokemonForm";
import { ChooseTeraTypeTable } from "../Components/ChooseTeraTypeTable";
import { ResultsField } from "../Components/ResultsField";
import { CalculatedOdds } from "../Components/CalculatedOdds";
import { Pokemon } from '../types/pokemon';

const Main: React.FC = () => {
  const [selectedPokemon, setSelectedPokemon] = useState<Pokemon | null>(null);
  const [selectedTeraType, setSelectedTeraType] = useState<string | null>(null);

  return (
    <div>
      <div className="grid-container-selection">
        <div className="grid-item">
          <h2>Choose Pokemon</h2>
          <ChoosePokemonForm onPokemonSelect={setSelectedPokemon} />
        </div>
        <div className="grid-item">
          <h2>Choose TeraType</h2>
          <ChooseTeraTypeTable onTeraTypeSelect={setSelectedTeraType} />
        </div>
      </div>
      <div className="grid-container-results">
        <ResultsField 
          selectedPokemon={selectedPokemon} 
          selectedTeraType={selectedTeraType} 
        />
        <CalculatedOdds 
          selectedPokemon={selectedPokemon} 
          selectedTeraType={selectedTeraType} 
          blacklistedPokemon={[]}
        />
      </div>
    </div>
  );
};

export default Main;