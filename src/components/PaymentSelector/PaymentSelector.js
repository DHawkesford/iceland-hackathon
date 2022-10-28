import { brands } from "@fortawesome/fontawesome-svg-core/import.macro"; // <-- import styles to be used
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import * as React from "react";
import { data } from "../../data.js";

function renderIcon(icon){
  switch(icon){
    case "visa": return <FontAwesomeIcon icon={brands("cc-visa")} />
    case "storecard": return <FontAwesomeIcon icon={brands("cc-amazon-pay")} />
    case "paypal": 
    default:
      return <FontAwesomeIcon icon={brands("paypal")} />
    
  }
};

function PaymentSelector({paymentMethods, setPaymentMethods}) {
  // api.cache(true);


  const handlePaymentMethodSelector = (event, newPaymentMethods) => {
    setPaymentMethods(newPaymentMethods);
    // Add clean up here - account for basket items that are assigned to a payment method which has been unselected
  };

  return (
    <>
      <h2>1. Select your payment methods</h2>
      <h3>
        Select your default payment method, or select multiple payment options
        to split the total across more than one payment method
      </h3>
      <ToggleButtonGroup
        orientation="vertical"
        value={paymentMethods}
        onChange={handlePaymentMethodSelector}
        aria-label="text formatting"
      >
        {data.paymentMethods.map((method) => (
          <ToggleButton value={method.name} aria-label={method.name} color="success">
            {renderIcon(method.icon)}
            
            {method.name}
          </ToggleButton>
        ))}
      </ToggleButtonGroup>
    </>
  );
}

export default PaymentSelector;
