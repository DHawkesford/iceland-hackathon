import "./App.css";
import PaymentSelector from "./components/PaymentSelector/PaymentSelector.js";
import ProductList from "./components/ProductList/ProductList.js";
import Totals from "./components/Totals/Totals.js";
import * as React from "react";
import { data } from "./data.js";

function App(api) {
  // api.cache(false);
  const [paymentMethods, setPaymentMethods] = React.useState([data.paymentMethods[0].name]);
  const [basket, setBasket] = React.useState(data.products)

  return (
    <div className="App">
      <header className="App-header">CodeIce</header>
      <h1>Your Basket</h1>
      <PaymentSelector paymentMethods={paymentMethods} setPaymentMethods={setPaymentMethods}></PaymentSelector>
      <ProductList basket={basket} setBasket={setBasket}></ProductList>
      <Totals paymentMethods={paymentMethods} basket={basket}></Totals>
    </div>
  );
}

export default App;
