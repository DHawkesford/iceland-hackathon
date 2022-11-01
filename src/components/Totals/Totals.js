function Totals({paymentMethods, basket}) {
  // api.cache(true);

  let totals = {total: {
    quantity: 0,
    total: 0
  }};
  
  for (let i in paymentMethods) {
    totals[paymentMethods[i]] = {
      quantity: 0,
      total: 0
    }
  };
  
  for (let i in basket) {
    totals[basket[i].paymentMethod].quantity += basket[i].quantity 
    totals[basket[i].paymentMethod].total += basket[i].price 
    totals["total"].quantity += basket[i].quantity 
    totals["total"].total += basket[i].price 
  }



  return (
    <div className="total-container">
        <h2>3. Confirm totals and checkout</h2>
        {paymentMethods.map(method => 
        <div className='payment-method'>
          <span className='payment-type'>{method}</span>
          <span className='payment-quantity'>{totals[method].quantity} items</span>
          <span className='payment-total'>£{totals[method].total}</span>
        </div>
        )}
        <div className='payment-method-total'>
          <span className='payment-type'>Total</span>
          <span className='payment-quantity'>{totals.total.quantity} items</span>
          <span>£{totals.total.total}</span>
        </div>
    </div>
  );
}

export default Totals;
