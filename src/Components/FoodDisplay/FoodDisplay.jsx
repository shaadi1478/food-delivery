import { useContext } from 'react'; // Ensure correct import from react
import './FoodDisplay.css'; // Ensure the correct path to your CSS file
import { StoreContext } from '../../Context/StoreContext'; // Ensure correct StoreContext import
import FoodItem from '../FoodItem/FoodItem';

const FoodDisplay = ({ category }) => {
  const { food_list } = useContext(StoreContext); // Use the correct context

  return (
    <div className="food-display" id="food-display">
      <h1>Top Dishes Near You</h1>
      <div className="food-display-list">
        {food_list.map((item) => {
          if (category === 'All' || category === item.category) {
            return (
              <FoodItem
                key={item._id}
                id={item._id}
                name={item.name}
                description={item.description}
                price={item.price}
                image={item.image}
                _btnss={item._btnss}
              />
            );
          }
          return null;
        })}
      </div>
    </div>
  );
};

export default FoodDisplay;
