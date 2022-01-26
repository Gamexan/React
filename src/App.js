

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import NavBar from './navBar/components/navBar/NavBar';



import { ClassComponent } from "./components/class-component/ClassComponent";
import ComponentChildren from "./components/component-children/ComponentChildren";
import FunctionalComponent from "./components/function-component/FunctionalComponent";
import ItemListContainer from "./components/item-list-container/ItemListContainer";

import CartIcon from "./icon/CartIcon";

const age = 18;

function App() {
  return (
    <div className="App">
      <NavBar />
      <h1>Heladeria pepito</h1>
      <hr />
      {/* <ClassComponent age={age} name="Rodolfo" /> */}
      <hr />
      {/* <FunctionalComponent age={age} name="Mateo" /> */}
      <CartIcon />
      <hr />
      <ItemListContainer />
      {/* <ComponentChildren otherProp="El título">
       
      </ComponentChildren> */}
      <br />
      <br />
      <br />
      <br />
    </div>
  );
}

export default App;
