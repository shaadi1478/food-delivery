import { useContext } from 'react';
import './PlaseOrder.css'
import { StoreContext } from '../../Context/StoreContext';

const PlaseOrder = () => {

    const {getTotalCartAmount} = useContext(StoreContext)
    return (
        <form className='place-order'>
            <div className="place-order-left">
                <p className="title">Delivary Information</p>
                <div className="multi-fields">
                    <input type="text" placeholder='first name'/>
                    <input type="text" placeholder='last name'/>
                </div>
                <input type="email" placeholder='email address'/>
                <input type="text" placeholder='street'/>
                <div className="multi-fields">
                    <input type="text" placeholder='city'/>
                    <input type="text" placeholder='state '/>
                </div>
                <div className="multi-fields">
                    <input type="number" placeholder='zip code'/>
                    <input type="text" placeholder='country'/>
                </div>
                <input type="number" placeholder='phone'/>
            </div>
            <div className="place-order-right">
            <div className="cart-total">
            <h2>Cart Totals</h2>
            <div>
            <div className="cart-total-details">
                    <p>Subtotal</p>
                    <p>$ {getTotalCartAmount()}</p>
                </div>
                <hr />
                <div className="cart-total-details">
                    <p>Delivary Fee</p>
                    <p>$ {getTotalCartAmount() === 0?0:2}</p>
                </div>
                <hr />
                <div className="cart-total-details">
                    <p>Total</p>
                    <p>$ {getTotalCartAmount() === 0?0:getTotalCartAmount()+2}</p>
                </div>
            </div>
            <button>PROCEED TO PAYMENT</button>
        </div>
            </div>
        </form>
    );
};

export default PlaseOrder;