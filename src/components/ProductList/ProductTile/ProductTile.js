/* <FontAwesomeIcon icon={brands('paypal')} /> */
// import {useState} from "React";

function ProductTile(props) {
  return (
    <>
      <img src={props.image} alt="product-item-pic"></img>
      <p>{props.product}</p>
      <p>{props.price}</p>
    </>
  );
}
export default ProductTile;
