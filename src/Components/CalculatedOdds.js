import React from "react"

const CalculatedOdds = () => {

  const data = (
    <>
      <div className="grid-container-suggestedMons">
        <table className="table-suggestedMons">
          <tr>
            <th>Pokemon</th>
            <th>Resistance</th>
            <th>Effectiveness</th>
            <th>Defence</th>
            <th>Sp. Def</th>
            <th>Speed</th>
          </tr>
        </table>
      </div>
    </>
  )

  return data;
}

const calculateOdds = (selectedMon, teraType) => {
  //Rly only care about the best offensive type against the teraType.
  //Then need to get the best defensive type against the original chosen mon type/s, as thats what moves they'll be attacking with.
  //Then need to combine that score, making sure to give an accurate scale of Offensive vs Defensive. Probably weigh defensive higher due to nature of raids.
  //Then get best mon that has an offensive (kinda mandatory) and then order by typing of best defensive.
  //If ties for both of the above, rank against the defence stats of pokemon, probably treat spdef and def same weight due to most mons having both typesets(? need confirm).
  //Using ranked list of best mons, return in a table with the weighting in front of them. 
}

export { CalculatedOdds }