import "./productList.scss";
import productPaymentSplit from './ProductTile/productPaymentSplit/productPaymentSplit.js';

function ProductList({basket, setBasket}) {
  return (
    <div className="container">
      {basket.map((item, index) => (
        <li className="item" key={item.price}>
          <img src={item.image} alt="product-item-pic"></img>
          <p>{item.product}</p>
          <p>Quantity: {item.quantity}</p>
          <p>Price: £{item.price}</p>
          <productPaymentSplit index={index}></productPaymentSplit>
        </li>
      ))}
    </div>
  );
}
export default ProductList;
