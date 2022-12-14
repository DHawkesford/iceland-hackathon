import "./productList.scss";
import ProductPaymentSplit from './ProductTile/productPaymentSplit/productPaymentSplit.js';

function ProductList({basket, setBasket, paymentMethods}) {
  return (
    <div className="container">
    <ul>
    <h2>2. Select a payment method for each item in your basket</h2>
      {basket.map((item, index) => (
        <li className="item" key={item.price}>
          <img src={item.image} alt="product-item-pic"></img>
          <div className="text-container">

          <p>{item.product}</p>
          <p>Quantity: {item.quantity}</p>
          <p>Price: £{item.price}</p>
          </div>
          <ProductPaymentSplit index={index} basket={basket} setBasket={setBasket} paymentMethods={paymentMethods}></ProductPaymentSplit>
        </li>
      ))}
      </ul>
    </div>
  );
}
export default ProductList;
