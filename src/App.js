import React from "react";
import DeliveryPage from "./Components/DeliveryAddress_Page/DeliveryPage";
import PaymentCardPage from "./Components/PaymentCard_Page/PaymentCardPage";
import PaymentPage from "./Components/Payment_Page/PaymentPage";

const App = () => {
  return (
    <div className="App">
      <PaymentPage />
      <DeliveryPage />
      <PaymentCardPage />
    </div>
  );
};

export default App;
