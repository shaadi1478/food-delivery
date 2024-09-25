import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { StoreContext } from "../../Context/StoreContext";
import { Watch } from "react-loader-spinner"; // Optional: For loading spinner

const FoodDetails = () => {
  const { id } = useParams(); // Get the food ID from the URL
  const { food_list } = useContext(StoreContext); // Access the food_list from context
  const [foodItem, setFoodItem] = useState(null);
  const [error, setError] = useState(false); // New state to track errors

  useEffect(() => {
    // Fetch the food item based on the ID
    const item = food_list.find((item) => item._id === id);
    if (item) {
      setFoodItem(item);
    } else {
      setError(true);
    }
  }, [id, food_list]);

  // Show loading spinner if food item is not yet loaded and no error
  if (!foodItem && !error) {
    return (
      <div className="loading-container">
        <Watch
          visible={true}
          height="80"
          width="80"
          radius="48"
          color="#4fa94d"
          ariaLabel="loading"
        />
      </div>
    );
  }

  // Display error message if the food item is not found
  if (error) {
    return <div className="error">Food item not found.</div>;
  }

  // Display the food item details once it is loaded
  return (
    <div className="food-details">
      <img className="food-details-image" src={foodItem.image} alt={foodItem.name} />
      <div className="food-details-info">
        <h1>{foodItem.name}</h1>
        <p>{foodItem.description}</p>
        <p className="food-details-price">Price: ${foodItem.price}</p>
        {/* Optional: Add buttons or actions like Add to Cart */}
        <button className="add-to-cart-button">Add to Cart</button>
      </div>
    </div>
  );
};

export default FoodDetails;
