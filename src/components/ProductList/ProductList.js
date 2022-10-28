import "./productList.scss";
import ProductPaymentSplit from './ProductTile/ProductPaymentSplit/ProductPaymentSplit.js';

function ProductList({basket, setBasket, paymentMethods}) {
  return (
    <div className="container">
    <ul>
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
