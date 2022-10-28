import { data } from "./../../data.js";
import "./productList.scss";

function ProductList() {
  return (
    <div className="container">
      {data.products.map((item) => (
        <li className="item" key={item.price}>
          <img src={item.image} alt="product-item-pic"></img>
          <p>{item.product}</p>
          <p>Price: £{item.price}</p>
        </li>
      ))}
    </div>
  );
}
export default ProductList;
