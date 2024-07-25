// import Header from '../Header/Header';
import Home from '../../Pages/Home/Home';
import ExploreMenu from '../ExploreMenu/ExploreMenu';
import { useState } from 'react';
import FoodDisplay from '../FoodDisplay/FoodDisplay';
import AppDownload from '../AppDownload/AppDownload';
// import LoginPopUp from '../LoginPopUp/LoginPopUp';

const Root = () => {

    const [category, setCategory] = useState("All")

    // const [showLogin, setShowLogin] = useState(false)
    return (
        <>
        
            <div className='max-w-7xl mx-auto'>
            {/* <Header setShowLogin={setShowLogin}></Header> */}
            <Home></Home>
            <ExploreMenu category={category} setCategory={setCategory}></ExploreMenu>
            <FoodDisplay category={category}></FoodDisplay>
            <AppDownload></AppDownload>
            </div>
        </>
    );
};

export default Root;