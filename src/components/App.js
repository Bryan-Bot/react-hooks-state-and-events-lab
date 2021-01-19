import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
  const [items, setItems] = useState(itemData);
  const [mode, changeMode] = useState(false)

  const color = mode ? "white" : "grey";

  function handleClick(){
    changeMode((mode)=>!mode)
  }
  // this data will be passed down to the ShoppingList as a prop
  console.log(items);


  return (
    <div className={"App " + (mode ? "dark" : "light")}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handleClick}>Dark Mode</button>
      </header>
      <ShoppingList items={items} />
    </div>
  );
}

export default App;
