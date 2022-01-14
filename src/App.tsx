import "./App.css";
import { ProductsList } from "./components/ProductList/index";
import { Cart } from "./components/Cart/index";

function App() {
  return (
    <div className="App">
      <ProductsList />
      <Cart />
    </div>
  );
}

export default App;
