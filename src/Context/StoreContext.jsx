import { createContext, useState } from "react";
import { food_list } from "../assets/assets";
export const SotreContext = createContext(null);

const SotreContextProvider = (props) => {
  const [carItems, setCartItems] = useState({});

  const addToCart = (itemId) => {
    if (!carItems[itemId]) {
      setCartItems((prev) => ({ ...prev, [itemId]: 1 }));
    } else {
      setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    }
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const getTotalCartAmount = () => {
    let totalAmout = 0;
    for (const item in carItems) {
      if (carItems[item] > 0) {
        let itemInfo = food_list.find((product) => product._id === item);
        totalAmout += itemInfo.price * carItems[item];
      }
    }
    return totalAmout
  };

  const contextValu = {
    food_list,
    carItems,
    setCartItems,
    addToCart,
    removeFromCart,
    getTotalCartAmount
  };
  return (
    <SotreContext.Provider value={contextValu}>
      {props.children}
    </SotreContext.Provider>
  );
};

export default SotreContextProvider;
