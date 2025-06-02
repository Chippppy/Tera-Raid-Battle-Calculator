import React, { useState } from 'react';
import { ChoosePokemonForm } from './Components/ChoosePokemonForm';
import { TeraTypeSelection } from './Components/TeraTypeSelection';
import { CalculatedOdds } from './Components/CalculatedOdds';
import { BlacklistPokemon } from './Components/BlacklistPokemon';
import { Pokemon } from './types/pokemon';
import './App.css';
import { ResultsField } from './Components/ResultsField';

const App: React.FC = () => {
  const [selectedPokemon, setSelectedPokemon] = useState<Pokemon | null>(null);
  const [selectedTeraType, setSelectedTeraType] = useState<string | null>(null);
  const [blacklistedPokemon, setBlacklistedPokemon] = useState<Pokemon[]>([]);

  return (
    <div className="app">
      <div className="grid-container-selection">
        <div className="grid-item">
          <ChoosePokemonForm onPokemonSelect={setSelectedPokemon} />
        </div>
        <div className="grid-item">
          <BlacklistPokemon 
            onBlacklistUpdate={setBlacklistedPokemon}
            blacklistedPokemon={blacklistedPokemon}
          />
        </div>
        <div className="grid-item">
          <TeraTypeSelection onTeraTypeSelect={setSelectedTeraType} />
        </div>
      </div>
      <ResultsField
        selectedPokemon={selectedPokemon}
        selectedTeraType={selectedTeraType}
      />
      <CalculatedOdds 
        selectedPokemon={selectedPokemon} 
        selectedTeraType={selectedTeraType}
        blacklistedPokemon={blacklistedPokemon}
      />
    </div>
  );
};

export default App;
