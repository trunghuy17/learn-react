import "./App.css";
import State from "./components/State";
import Components from "./components/Components";
import ConditionalRendering from "./components/ConditionalRendering";
import ListKey from "./components/ListKey";
import CSS from "./components/CSS";
import PropsDrillingLiftingStateUp from "./components/PropsDrillingLiftingStateUp";
import Form from "./components/Form";
import StateHooks from "./components/StateHooks";
import EffectHooks from "./components/EffectHooks";

// function ProductItem({ name, className, ...restProps }: any) {
//   return (
//     <div className={className}>
//       Product Item: {name} <br />
//       <button {...restProps}>Delete</button>
//     </div>
//   );
// }

function App() {

  return (
    <div style={{padding:'15px'}}>
      {/* {/* <Welcome
        title="Hello React"
        desc="This is a description"
        className="custom-welcome"
        style={{ color: "blue" }}
        // data-like-bird="a"
        // component1={ProductItem}
        // component2={<ProductItem />}
      /> */}
      <State />
      <br />
      <Components />
      <ConditionalRendering />
      <br/>
      <ListKey/>
      <br/>
      <CSS/>
      <br/>
      <PropsDrillingLiftingStateUp/>
      <br/>
      <Form/>
      <br/>
      <StateHooks/>
      <br/>
      <EffectHooks/>
    </div>
  );
}

export default App;
