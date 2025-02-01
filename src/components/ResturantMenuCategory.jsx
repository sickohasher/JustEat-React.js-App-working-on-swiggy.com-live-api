import { useState } from "react";
import MenuDis from "./MenuDiscription";


let ResCategory = ({resCategories , showMenuItems , setShowItemData , dummy})=>{    // ResCategory is controlled component as its state (i.e showMenuItems) is managed by its parent component and passed here as props

    // let [showMenuItems , setShowMenuItems] = useState(false); // by default set value to false and no menu item is shown

    handelClick = ()=>{

        // console.log("Clicked");

        // setShowMenuItems(!showMenuItems);  // by this on clicking according header the value of showMenuItems changes alternativily( i.e expand and collapase)

        setShowItemData();  
    }

    return (

        <div className="bg-slate-200 w-6/12 m-auto rounded-md">

        <div>

    <h1 className=" flex  m-auto justify-center font-bold text-2xl my-6 border-solid cursor-pointer" onClick={handelClick}> {resCategories.title} ({(resCategories?.itemCards?.length)||(resCategories?.categories?.length)}) </h1>  {/* Resturants menu header */}

    {/* let happy = "hii"

console.log(happy);     */}
   

    </div>


        
   <div>


   { showMenuItems && <MenuDis item = {resCategories?.itemCards} dummy = {dummy} />  }  {/* ui layer  and with showMenuItems accordian is formed to show and hide datas*/}  {/*Passing dummy as a props /prop drilling */}

    { showMenuItems &&  <MenuDis item2 = {resCategories?.categories} dummy = {dummy} /> }  {/* ui layer */}


   {/* console.log(resCat); */}



    {/* let {resCat} = resCategories.categories; */}


  {/* {resCat.map((cat)=>{

                return <MenuDis item2 = {cat?.itemCards}/>  
                
            })} */}

  
    
    
   </div>

    

    </div>


    )
}


export default ResCategory;