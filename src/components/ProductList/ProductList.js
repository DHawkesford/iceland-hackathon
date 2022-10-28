import { data } from "./../../data.js";
import ProductTile from "./ProductTile/ProductTile.js";

function ProductList() {

  return (

    {data.map(({image, product, price})=>(
      <img src={props.image} alt="product-item-pic"></img>
      <p>{props.product}</p>
      <p>{props.price}</p>
  ))}
  )

  // console.log(data);
  // const basket = data.products.map((item) => <ProductTile>{item}</ProductTile>);
  // return basket;
}
export default ProductList;
