import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import MenuDis from './MenuDiscription'
import { clearCart, removeItems } from './utils/ReduxStore/Slices/cartSlice'

const Cart = () => {      

    const cartItems = useSelector((store)=>store.cart.items)      // suscribing to cart slice store

    const dispatch = useDispatch();       // dispatching 

    const ClearItem = ()=>{

        dispatch(clearCart());     // dispatching clear cart action
    }

    const removeItem = ()=>{

        dispatch(removeItems());    // dispatching remove items action 
    }


  return (
    <div className='h-screen'>
    <div  className='text-center font-bold text-2xl mt-5' >Cart Hai</div>  
    <div className='w-6/12 m-auto text-center mt-5 text-3xl'  > {cartItems.length === 0 && <h1> please add some items </h1> } {/* if no item is added it display the msg to add some items in carts */} {( <MenuDis item = {cartItems} /  >) || ( <MenuDis item2 = {cartItems} /  >) }</div>    {/* Added items to cart are shown on ui */}
   
   <div className='flex gap-5 justify-center mt-5'>

    <div> <button className='border-black bg-black text-white rounded-lg p-2 ' onClick={ClearItem} >Clear All Items</button></div>      {/* Remove items from cart  shown on ui all in once*/}

    <div> <button className='border-black bg-black text-white rounded-lg p-2' onClick={removeItem} >Remove Items</button></div>     {/* remove items from cart  shown on ui one by one */}

    </div>


    </div>
  )
}

export default Cart