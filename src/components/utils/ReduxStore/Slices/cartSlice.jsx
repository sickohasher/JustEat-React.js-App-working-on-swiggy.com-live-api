import { createSlice } from "@reduxjs/toolkit";




const cartSlice = createSlice({       // Creating a cart - Slice for our store
           
name: "cart",          // slice 1st configuration (i.e name of slice)


initialState: {       // slice 2nd configuration (i.e initial state/value of slice)

    items : [],
},


reducers:{           // slice 3rd configuration (i.e reducers)  with action(ex- addItems) and their corresponding reducer function(ex- ()={})

    addItems : (state , action) =>{    // reducer(addItems) & its reducer function (()=>{})        // two parameter in action - 1st is initial state/ value and 2nd based on which state/value will be modified

        state.items.push(action.payload);       


    },


    removeItems : (state)=>{

        state.items.pop();              // If any item is added remove one at a time from lasts
    },



    clearCart : (state)=>{

        state.items.length = 0;          // clear all the items from cart and make cart empty at once
    }

},

}
);



export const{addItems , removeItems , clearCart} = cartSlice.actions;     // exporting our actions from slice

export default cartSlice.reducer;                                       // exporting reducer from slice