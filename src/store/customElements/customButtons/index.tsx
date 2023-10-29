import React, { useState } from "react";
import { Button } from "antd";

enum ButtonName {
  Pickup = "Pickup",
  Delivery = "Delivery",
  Shipping = "Shipping",
}

interface CustomButtonsProps {
    handleButtonSelect: (buttonName: ButtonName) => void;
}

const CustomButtons = ({ handleButtonSelect }: CustomButtonsProps) => {
  const [localSelectedButton, setLocalSelectedButton] = useState<ButtonName | null>(null);

  const handleButtonClick = (buttonName: ButtonName) => {
    setLocalSelectedButton(buttonName);
    handleButtonSelect(buttonName);
  };

  return (
    <div>
      <Button
        style={{
          border: "none",
          marginRight: "8px",
          background:
            localSelectedButton === ButtonName.Pickup ? "#ff0000" : "transparent", 
          color:
            localSelectedButton === ButtonName.Pickup ? "#ffffff" : "inherit",
        }}
        onClick={() => handleButtonClick(ButtonName.Pickup)}
      >
        Pickup
        Ready by Octaber 29
      </Button>
      <Button
        style={{
          border: "none",
          marginRight: "8px", 
          background:
            localSelectedButton === ButtonName.Delivery ? "#ff0000" : "transparent", 
          color:
            localSelectedButton === ButtonName.Delivery ? "#ffffff" : "inherit", 
        }}
        onClick={() => handleButtonClick(ButtonName.Delivery)}
      >
        Delivery
        As soon as 5am today
      </Button>
      <Button
        style={{
          border: "none",
          background:
            localSelectedButton === ButtonName.Shipping ? "#ff0000" : "transparent",
          color:
            localSelectedButton === ButtonName.Shipping ? "#ffffff" : "inherit",
        }}
        onClick={() => handleButtonClick(ButtonName.Shipping)}
      >
        Shipping
        Get it by Sun,
        Oct 29
      </Button>
    </div>
  );
};

export default CustomButtons;
