import { useContext } from "react";
import { ResImg_Url } from "../constants/url";     // importing cdn url for resturant imges     // this import is use when named export is done

import UserContext from "./utils/UserContext";


let Resturantcard = (props)=>{      // resturant card component   // props = Reslist(data from api)     

    let {Resdata} = props;

    let{cloudinaryImageId , name , avgRating , cuisines , locality , costForTwo , areaName } = Resdata.info;

    let{deliveryTime } = Resdata.info.sla

    let loggedInUser = useContext(UserContext);  // using usecontext hooks and data from usercontext



    return(
        <div className="mt-20  h-[340px] w-[220px] rounded-md hover:h-[150px] " style={{backgroundColor: "#f0f0f0"}}>
            <img src={ ResImg_Url + cloudinaryImageId} alt="resturant img" className=" object-cover w-[220px] h-[180px] rounded"></img>
            

          <div className="p-2  ">
            
               <h2 className="font-bold">{name}</h2>

               <div className="flex space-x-4 pt-2">

                    <h3> <i className="fa-regular fa-star"></i> {avgRating}</h3>
                    <h3> <i className="fa-solid fa-hourglass-half "></i> {deliveryTime} min</h3>

               </div>

               <h3>{cuisines.join(", ").substring(0, 19)+"..."}</h3>

               <h4>{costForTwo}</h4>

               <h3> <i className="fa-solid fa-location-dot"></i>  { locality || areaName} </h3>

               <h2> User : {loggedInUser.loggedInUser} </h2>   {/* context api data */} 
            </div>
        </div>
    )
}


export default Resturantcard;