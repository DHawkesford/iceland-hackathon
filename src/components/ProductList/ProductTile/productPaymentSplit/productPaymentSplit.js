import { brands } from "@fortawesome/fontawesome-svg-core/import.macro"; // <-- import styles to be used
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import * as React from "react";

function renderIcon(paymentName){
    switch(paymentName){
      case "Debit Card": return <FontAwesomeIcon icon={brands("cc-visa")} />
      case "Store Card": return <FontAwesomeIcon icon={brands("cc-amazon-pay")} />
      case "Paypal": 
      default:
        return <FontAwesomeIcon icon={brands("paypal")} />
      
    }
  };

function productPaymentSplit({index, basket, setBasket, paymentMethods}) {
  // api.cache(true);


  const handlePaymentMethodSelector = (event, newPaymentMethod) => {
    // Update the item in the basket here
    const newBasket = [...basket];
    newBasket[index].paymentMethod = newPaymentMethod;
    
    if (newPaymentMethod !== null) {
        setBasket(newBasket);
    }
  };

  const renderColour = (method) => {
    if(basket[index].paymentMethod === method){
      console.log(method);
      return "success";
    } else {
      return "";
    }
  }

  return (
      <ToggleButtonGroup
        orientation="vertical"
        value={basket[index].paymentMethod}
        onChange={handlePaymentMethodSelector}
        aria-label="text formatting"
        exclusive
      >
        {paymentMethods.map((method) => (
          <ToggleButton key={method} value={method} aria-label={method} color={renderColour(method)}>
            {renderIcon(method)}
            
            {method}
          </ToggleButton>
        ))}
      </ToggleButtonGroup>
  );
}

export default productPaymentSplit;
