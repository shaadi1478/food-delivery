import { useContext } from "react";
import { assets } from "../../assets/assets";
import "./FoodItem.css";
import { SotreContext } from "../../Context/StoreContext";
import { Link, NavLink } from "react-router-dom";
const FoodItem = ({ id, name, description, image, price, fooditem }) => {
  const { carItems, addToCart, removeFromCart } = useContext(SotreContext);
  // const {_id, _name, _details, _images, _pricee,} = fooditem;

  return (
    <div className="food-item">
      <div className="food-item-img-container">
        <img src={image} alt="" className="food-item-image" />
        {!carItems[id] ? (
          <img
            className="add"
            onClick={() => addToCart(id)}
            src={assets.add_icon_white}
          />
        ) : (
          <div className="food-item-counter">
            <img
              onClick={() => removeFromCart(id)}
              src={assets.remove_icon_red}
              alt=""
            />
            <p>{carItems[id]}</p>
            <img
              onClick={() => addToCart(id)}
              src={assets.add_icon_green}
              alt=""
            />
          </div>
        )}
      </div>
      <div className="food-item-info">
        <div className="food-item-name-rating">
          <p>{name}</p>
          <img src={assets.rating_starts} alt="" />
        </div>
        <p className="food-item-desc">{description}</p>
        <p className="food-item-price">${price}</p>
        <div className="flex justify-between">
        {/* to={`/fooditem/${id}`} */}
          <Link>
          <button className="btn bg-orange-400 hover:bg-green-500 text-white font-bold">
            View Details
          </button>
          </Link>
          <NavLink to="/cart">
            <button className="btn bg-orange-400 hover:bg-green-500 text-white font-bold">
              View Cart
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default FoodItem;
