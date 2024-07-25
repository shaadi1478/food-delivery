import './ExploreMenu.css'
import {menu_list} from '../../assets/assets'
const ExploreMenu = ({category, setCategory}) => {
    return (
        <div>
            <div className="explore-menu" id="explore-menu">
                <h1 className='text-4xl font-bold'>Explore Our Menu</h1>
                <p className='explore-menu-text'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores quae dolorem explicabo eos voluptatibus, recusandae cumque sequi, fugit rem error rerum sed, ratione repellendus quasi non doloremque quo soluta veniam?</p>
                <div className="explore-menu-list">
                    {menu_list.map((item, index) =>{
                        return(
                            <div onClick={() =>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)} key={index} className='explore-menu-list-item'>
                                <img className={category===item.menu_name?"active":""} src={item.menu_image} alt="" />
                                <p>{item.menu_name}</p>
                            </div>
                        )
                    })}
                </div>
                <hr />
            </div>
        </div>
    );
};

export default ExploreMenu;