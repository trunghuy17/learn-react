import State from '../State'
import Components from '../Components'
import ConditionalRendering from '../ConditionalRendering'
import ListKey from '../ListKey'
import PropsDrillingLiftingStateUp from '../PropsDrillingLiftingStateUp'
import  Form  from '../Form'
import StateHooks from '../StateHooks'
import EffectHooks from '../EffectHooks'
import CSS from "../CSS";


function HomePage() {
  return (
    <div>
       <State />
      <br />
      <Components />
      <ConditionalRendering />
      <br />
      <ListKey />
      <br />
      <CSS />
      <br />
      <PropsDrillingLiftingStateUp />
      <br />
      <Form />
      <br />
      <StateHooks />
      <br />
      <EffectHooks />
    </div>
  )
}

export default HomePage
