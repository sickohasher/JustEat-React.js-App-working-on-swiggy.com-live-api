import { configureStore } from "@reduxjs/toolkit";

import cartSlice from "./Slices/cartSlice.jsx";



const cartStore = configureStore({        // Craeating our store using hook - configureStore() 

    reducer: {                            // big reducer that contains all slices reducer 

        cart : cartSlice,               // importing cartSlice from cartSlice  


    },


});


export default cartStore;