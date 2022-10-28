import { brands } from "@fortawesome/fontawesome-svg-core/import.macro"; // <-- import styles to be used
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import * as React from "react";
import { data } from "../../data.js";

function PaymentSelector(api) {
  // api.cache(true);

  const [formats, setFormats] = React.useState(() => ["paypal", "italic"]);

  const handleFormat = (event, newFormats) => {
    setFormats(newFormats);
  };

  return (
    <>
      <h2>1. Select your payment methods</h2>
      <h3>
        Select your default payment method, or select multiple payment options
        to split the total across more than one payment method
      </h3>
      <FontAwesomeIcon icon={brands("paypal")} />
      <ToggleButtonGroup
        orientation="vertical"
        value={formats}
        onChange={handleFormat}
        aria-label="text formatting"
      >
        {data.paymentMethods.map((method) => (
          <ToggleButton value="underlined" aria-label={method.name}>
            {method.name}
          </ToggleButton>
        ))}
        {/* <ToggleButton value="bold" aria-label="">
          <FormatBoldIcon />
        </ToggleButton>
        <ToggleButton value="italic" aria-label="italic">
          <FormatItalicIcon />
        </ToggleButton>
        <ToggleButton value="underlined" aria-label="underlined">
          <FormatUnderlinedIcon />
        </ToggleButton>
        <ToggleButton value="color" aria-label="color" disabled>
          <FormatColorFillIcon />
          <ArrowDropDownIcon />
        </ToggleButton> */}
      </ToggleButtonGroup>
    </>
  );
}

export default PaymentSelector;
