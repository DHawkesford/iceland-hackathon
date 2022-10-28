import "./App.css";
import PaymentSelector from "./components/PaymentSelector/PaymentSelector.js";
import ProductList from "./components/ProductList/ProductList.js";
import Totals from "./components/Totals/Totals.js";

function App() {
  return (
    <div className="App">
      <header className="App-header">CodeIce</header>
      <h1>Your Basket</h1>
      <PaymentSelector></PaymentSelector>
      <ProductList></ProductList>
      <Totals></Totals>
    </div>
  );
}

export default App;
