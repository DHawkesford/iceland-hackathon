import "./productList.scss";
import ProductPaymentSplit from './ProductTile/ProductPaymentSplit/ProductPaymentSplit.js';

function ProductList({basket, setBasket, paymentMethods}) {
  return (
    <div className="container">
      {basket.map((item, index) => (
        <li className="item" key={item.price}>
          <img src={item.image} alt="product-item-pic"></img>
          <p>{item.product}</p>
          <p>Quantity: {item.quantity}</p>
          <p>Price: £{item.price}</p>
          <ProductPaymentSplit index={index} basket={basket} setBasket={setBasket} paymentMethods={paymentMethods}></ProductPaymentSplit>
        </li>
      ))}
    </div>
  );
}
export default ProductList;
