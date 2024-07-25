import { useContext } from 'react';
import './FoodDisplay.css'
import { SotreContext } from '../../Context/StoreContext';
import FoodItem from '../FoodItem/FoodItem';
const FoodDisplay = ({category}) => {
    const {food_list} = useContext(SotreContext)
    return (
        <div className='food-display' id='food-display'>
            <h1>Top Diseh Near You</h1>
            <div className="food-displayu-list">
                {food_list.map((item,index) =>{
                    if(category==="All" || category===item.category){
                        return <FoodItem key={index} id={item._id} name={item.name} description={item.description} price={item.price} image={item.image} _btnss={item._btnss}></FoodItem>
                    }
                })}
            </div>
        </div>
    );
};

export default FoodDisplay;