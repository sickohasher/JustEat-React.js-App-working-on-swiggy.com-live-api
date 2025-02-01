import { useDispatch } from "react-redux";
import { ResImg_Url } from "../constants/url";
import { addItems } from "./utils/ReduxStore/Slices/cartSlice";

let MenuDis = ({item , item2 , dummy})=>{

    

    // console.log(item , item2 , dummy);  {/* taking dummy as a props /prop drilling */}

    const dispatch = useDispatch();    // dispatch hook 

    const HandleAddItems = (items)=>{

        // dispact an action

        dispatch(addItems(items));        // dispatching addItems action & value inside addItems( value( i.e items )) is = action.payload
    }

    return (

        <div className="bg-slate-200 m-auto">

                        {item?.map(items => 
                     <div key={items.card.info.id} className="border-b-2 border-black m-auto">
             
                                         <div className="mt-4">

            
                                                                   <span className="  mx-2 m-auto font-bold text-2xl my-6">{items?.card?.info?.name} - </span>
                                                                    <span className="   m-auto text-xl my-2"> ₹{(items?.card?.info?.price / 100) || (items?.card?.info?.defaultPrice / 100)}</span>
                                        </div>

                                                                        <div className="flex justify-between ">
 
                                                                           <p className="   mx-2 m-auto  text-sm my-2">{items?.card?.info?.description}</p>
                                                                           
                                                                            <img className=" w-16 h-16 mx-2 my-2" src={ ResImg_Url + items?.card?.info?.imageId} alt="" />
                                                                            <button className=" absolute  flex  my-12 bg-white shadow-lg mx-[660px] " onClick={()=>HandleAddItems(items)}   > Add+ </button>  {/* on click of add button HandleAddItems func get run  */}
                                                                        </div>


                           </div>
        
                 )}
 
              <div>


              {item2?.map(items => 
                     <div key={items?.itemCards[0]?.card?.info?.id} className="border-b-2 m-auto border-black" >
             
                                         <div>

            
                                                                   <span className="  mx-2  font-bold text-2xl my-6">{items?.itemCards[0]?.card?.info?.name} - </span>
                                                                    <span className="  m-auto justify-center text-xl my-2"> ₹{(items?.itemCards[0]?.card?.info?.price / 100) || (items?.itemCards[0]?.card?.info?.defaultPrice / 100)}</span>
                                        </div>
                                                                             
                                        <div className="flex justify-between">
                                                                           <p className="  mx-2 m-auto  text-sm my-2">{items?.itemCards[0]?.card?.info?.description}</p>
                                                                           
                                                                            <img className=" w-16 h-16 mx-2 my-2" src={ ResImg_Url + items?.itemCards[0]?.card?.info?.imageId }  alt="no img" />
                                                                            <button className=" absolute  flex  my-12 bg-white shadow-lg mx-[660px] "  onClick={()=>HandleAddItems(items)}  > Add+ </button>
                                                                           </div>


                           </div>
        
                 )}







                 </div>
        

         </div>


      

             
                                            
    )
}

export default MenuDis;