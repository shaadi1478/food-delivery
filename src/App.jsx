import { Route, Routes } from "react-router-dom";
import Header from "./Components/Header/Header";
import Cart from "./Pages/Cart/Cart";
import PlaseOrder from "./Pages/PlaseOrder/PlaseOrder"
import Footer from "./Components/Footer/Footer";
import Root from "./Components/Root/Root";
import { useState } from "react";
import LoginPopUp from "./Components/LoginPopUp/LoginPopUp";
import FoodDetails from "./Components/FoodDetails/FoodDetails";

const App = () => {

  const [showLogin, setShowLogin] = useState(false)

  return (
    <>
    {showLogin?<LoginPopUp setShowLogin={setShowLogin} />:<></>}
      <div className="app">
      <Header setShowLogin={setShowLogin} />
      <Routes>
        <Route path="/" element={<Root />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/order" element={<PlaseOrder />} />
        <Route path="/food/:_id" element={<FoodDetails />} />
      </Routes>    
    </div>
    <Footer />
    </>
  );
};

export default App;