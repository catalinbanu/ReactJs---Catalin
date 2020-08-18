import React from "react";
import "./App.css";
import Order from "./components/first-component/first-component.component";
import SecondComponent from "./components/second-component/second-component.component";

function App() {
  let name: string = "Catalin";
  let adress: string = "Brasov";
  let phone: string = "07xxx";
  let product: string = "phone";

  return (
    <div className="App">
      <h1>Hello world! This is my first React app</h1>
      <Order
        name={name}
        adress={adress}
        phone={phone}
        product={product}
      ></Order>
      <SecondComponent data="Hello from  "></SecondComponent>
    </div>
  );
}

export default App;
