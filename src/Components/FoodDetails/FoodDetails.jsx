import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const FoodDetails = () => {
  const { _id } = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("/food.json", setData);
  }, []);

  if (!data) {
    return <div>Loading...</div>;
  }

  const foodItem = data.find((item) => item.id === _id);
  return <div>{foodItem ? JSON.stringify(foodItem) : "Item not found"}</div>;
};

export default FoodDetails;
