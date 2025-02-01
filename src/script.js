import React, { useEffect, useState } from "react";

import ReactDOM from "react-dom/client";

import Heading from "./components/Heading";

import Body from "./components/Body";

import Footer from "./components/Footer";

import About from "./components/About";    

import Contact from "./components/Contact";

import Error from "./components/Error";

import ResturantMenus from "./components/ResturantMenu";

import {createBrowserRouter , Outlet, RouterProvider} from "react-router-dom";       // createBrowerRouter - for creating routing configration and RouterProvide - to pass router which component to route on basis of path as per routing configration


import UserContext from "./components/utils/UserContext";
import { Provider } from "react-redux";
import cartStore from "./components/utils/ReduxStore/MainStore";
import Cart from "./components/Cart";



 Applayout = ()=>{       // app layout component





    let [userName , setUserName] = useState();      // for context data if data is dynamic

    useEffect(()=>{                                // type of a Authantication codes (just for ex. for user name)

        let user = {

            name : "Anii",

        };

       setUserName(user.name);

       

        
    } , []);
   



     return(


        




        <div className="main-conatiner">

            <Provider store={cartStore} >          {/* providing our store to whole app via Provider and store={storename}  */}


            <UserContext.Provider value = {{loggedInUser : userName , setUserName}}> {/*by value we are overwriting/modifiying the context data value */}     {/* Only show dhynamic context data in header component and rest component will have defualt context data */}    {/* by passing setUserData to header context data changes as per value update in input box  */}
           
            <Heading/>         {/*impoting heading component */}  {/* remains on all pages as like footer  */}
            
            
            {/* <Body/>             impoting body  component */} 
           
           
           
            
            
             <Outlet/>          {/* as per path changes the pages and data changes as child component get render on basis of paths  */}


           
           
            <Footer/>             {/*impoting footer component */}  
        
             
            </UserContext.Provider>


            </Provider>
        
        </div>

       
     )
}

let AppRouting = createBrowserRouter([               // routing configration (tells on which path to route what component)
    {
        path: "/",                 // parent path           
        element: <Applayout/>,     // load homepage(i.e layout)

         
        children:[     // creating below children for applayout
            
            
            {
                path: "/",               
                element: <Body/>,
            },

            {
                path: "/about",
                element: <About/>,
            },
            {
                path: "/contact",
                element: <Contact/>,
            },
            {
                path: "/cart",
                element: <Cart/>,
            },

            {
                path: "/resturant/:id",
                element: <ResturantMenus/>,
            },
        ],


        errorElement: <Error/>,       // for pages where routing is not define show this custom 404 error 
    },
    
]);



let root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    
<RouterProvider router={AppRouting}/>

);         // with help of RouterProvider component by react router dom we can route on our defined routers as per in routing configration(AppRouting)

