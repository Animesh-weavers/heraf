import React from "react";
import DeliveryPage from "./Components/DeliveryAddress_Page/DeliveryPage";
import PaymentPage from "./Components/Payment_Page/PaymentPage";


const App = () => {
  return (
    <div className="App">
      <PaymentPage />
      <DeliveryPage />
    </div>
  );
};

export default App;
