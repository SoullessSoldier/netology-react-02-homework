import products from "@/data/products";
import iconData from "@/data/icons";
import Store from "./components/Store";

import "./App.css";

function App() {
  return (
    <>
      <h1>Homework 02 - Events&States- Layouts</h1>
      <Store data={products} icons={iconData} />
    </>
  );
}

export default App;
