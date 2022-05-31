import React from "react";
import DeliveryPage from "./Components/DeliveryAddress_Page/DeliveryPage";
import PaymentCard_Page from "./Components/PaymentCard_Page/PaymentCard_Page";
import PaymentPage from "./Components/Payment_Page/PaymentPage";

const App = () => {
  return (
    <div className="App">
      <PaymentPage />
      <DeliveryPage />
      <PaymentCard_Page />
    </div>
  );
};

export default App;
