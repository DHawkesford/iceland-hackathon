import "./productList.scss";

function ProductList({ basket, setBasket }) {
  return (
    <div className="container">
      <ul>
        {basket.map((item, index) => (
          <li className="item" key={item.price}>
            <img src={item.image} alt="product-item-pic"></img>
            <div className="text-container">
              <p>{item.product}</p>
              <p>Quantity{item.quantity}</p>
              <p>Price: £{item.price}</p>
            </div>
            <productPaymentSplit index={index}></productPaymentSplit>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default ProductList;
