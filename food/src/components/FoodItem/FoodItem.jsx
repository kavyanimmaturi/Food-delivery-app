import React, { useContext } from 'react';
import { assets } from '../../assets/assets';
import { StoreContext } from '../../context/StoreContext';
import "./FoodItem.css";

const FoodItem = ({id,name,price,description,image}) => {

  const {cartItems, addToCart, removeFromCart} = useContext(StoreContext)

  return (
    <div className='food-item'>
       <div className="food-item-img-container">
          <img className='food-item-img' src={image} alt=''/>
          {!cartItems[id]
              ?<img className='add' onClick={() => addToCart(id)} src={assets.add_icon_white} alt="icon"/>
              :<div className='food-item-counter'>
                    <img onClick={() => removeFromCart(id)} src={assets.remove_icon_red} alt="logo"/>
                    <p>{cartItems[id]}</p>
                    <img onClick={() => addToCart(id)} src={assets.add_icon_green} alt="icon"/>
                </div>
          }
       </div>
       <div className='food-item-info'>
         <div className="food-item-name-rating">
            <p>{name}</p>
            <img src={assets.rating_starts} alt='stars'/>
         </div>
          <p className='food-item-description'>{description}</p>
           <p className="food-item-price">${price}</p>
          </div>
    </div>
  )
}

export default FoodItem
