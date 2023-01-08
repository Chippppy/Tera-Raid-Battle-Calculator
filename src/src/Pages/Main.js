import {ChoosePokemonForm} from "../Components/ChoosePokemonForm";


const Main = () => {

  const info = (
  <>
    <div>
      <h3>Choose Pokemon</h3>
      <ChoosePokemonForm/>
      <h3>Choose TeraType</h3>
    </div>
  </>
  )

  return info;
}



export default Main;