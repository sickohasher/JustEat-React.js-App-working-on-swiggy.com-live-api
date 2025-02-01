import { Link } from "react-router-dom";
import img1 from "../../accests/Logo.png";     // importing logo image   

import useNetStatus from "./utils/useNetStatus";

import UserContext from "./utils/UserContext";

import {useContext, useState} from "react";


import { useSelector } from "react-redux";





let Heading = ()=>{                 // heading component   

    let[btnLogin , setbtnLogin] = useState("Login");          // local state variable for login/logout button


    let status = useNetStatus();       // using custom hooks for check net status

    let {loggedInUser,setUserName} = useContext(UserContext); // using usecontext hooks and data from usercontext

    

    const cartItem = useSelector((store)=>{        //reading data from cart about items using a useSelector() 

      return  store.cart.items;
    });

    // console.log(cartItem);




    return (
        <div className="flex justify-around shadow-lg ">

            <div className="flex mr-48 justify-start">
             <Link to="/"className="ml-12" > <img className="h-[100px] w-[200px] justify-start" src= {img1} alt="Logo Image"  ></img> </Link>  
            </div>

{/* <div className="flex"> */}
            <div className="flex space-y-14">
                <ul className="flex items-center space-x-12" >

                    <li>
                     <h5 className="head-links" >  Status: {status ? "🟢 online" : "🔴 offline"} </h5>  
                    </li>

                    <li>
                     <Link className="head-links" w-36 to="/">  home </Link> 
                    </li>

                    <li>
                     <Link className="head-links" to="/about">  about  </Link>
                    </li>

                    <li>
                      <Link className="head-links" to="/contact"> contact</Link>
                    </li>

                    <li>
                      <Link className="head-links" to="/cart"> <i class="fa-solid fa-cart-shopping"></i> <sup>{cartItem.length} </sup>  </Link>
                    </li>

                    <input className="border-black border p-2" type="text" value={loggedInUser}  onChange={(e)=>setUserName(e.target.value)}/>   {/* Changes context data dynimically as per input value */}

                    <li className="head-links"> {loggedInUser} </li> {/* context api data or context data*/}
                </ul>
            </div>

            <div className="flex items-center text-black rounded-md p-2 ">
               <i  className="fa-regular fa-user bg-slate-950 text-white rounded-md p-2"></i>
                <button className="px-2" onClick = {()=>{    // function to change login/logout btn on click
                    
                   btnLogin === "Login" ?  setbtnLogin("LogOut") : setbtnLogin("Login") ;  //Ternery operator ( for toogle button ) if btn value = login chnge to logout if not (ie if value = logout) chnage to login again   --->  // set btnlogin value to LogOut on click of button and re - render the whole component(Heading) and update the value

                }} >{btnLogin}</button> 


            </div>
           
 </div>
        // </div>

    )
}


export default Heading;             // this export is default export