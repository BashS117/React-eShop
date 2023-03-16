import { useState } from "react";

const initialState = {
    cart:[],
}

const useInitialState = ( )=>{
    const [state, setState]=useState(initialState);


    const addToCart = (product,amount)=>{
const cartItemProduct = {
    ...product,
    amount
};
        setState({
            ...state,
            cart: [...state.cart, cartItemProduct],
            
        });
    };

    const removeFromCart = (payload)=>{
        setState({
            ...state,
            cart:state.cart.filter(items=> items.id!== payload.id)
        })
    };


    const [amount, setAmount]= useState(1);




    return{
        state,
        addToCart, 
        removeFromCart,
        amount,
        setAmount
        
    }



}
export default useInitialState;
