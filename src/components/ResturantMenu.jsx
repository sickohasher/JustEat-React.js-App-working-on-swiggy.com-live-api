
import ShimmerUi from "./Shimmer";
import { useParams } from "react-router-dom";
import useResMenu from "./utils/useResMenu";       // importing custom hook
import ResCategory from "./ResturantMenuCategory";
import { useState } from "react";




let ResturantMenus = ()=>{

    // let [resInfo , setResInfo] = useState(null);

    let dummy = "Dummy Datas"  // Pass dummy as a props /prop drilling 

    let [showItemData , setShowItemData] = useState(false)

    let {id} = useParams();     // to get parameter(i.e. resturant id )  


    let resInfo = useResMenu(id)    // coustom hook and passing id as input

   


    // useEffect(()=>{

    //     resMenus();      // fuunc that fetches data of resturant menus  

    // } , []);

    // let resMenus = async ()=>{

    //     let api = await fetch(Menu_api+id);      // fetching api data for resturant menus

    //     let apiData = await api.json();

    //     console.log(apiData);

    //     setResInfo(apiData);

    //     // console.log(setResInfo);
    // }

    if(resInfo === null) return <ShimmerUi/>


    let{name , cuisines , costForTwoMessage , totalRatingsString , avgRating} = resInfo?.data?.cards[2]?.card?.card?.info;


    let{itemCards,title} = resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;


    // console.log(resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards)

    let resCat = resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((cat)=>{
      return  cat.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory" || cat.card?.card?.["@type"] === 'type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory'
})

    console.log(resCat)

    

   

   

    // console.log(itemCards)

    


    return(
        <div>
            <h1 className="flex mx-auto justify-center font-bold text-2xl my-6">{name}</h1>
            {/* <h2>{cuisines.join(", ")} - {costForTwoMessage}</h2> */}
            {/* <h2>{costForTwoMessage}</h2> */}
            <h2 className="flex m-auto justify-center">{avgRating} - {totalRatingsString}</h2>
            {/* <h2>{totalRatingsString}</h2> */}


            {/* Accordian to be here for catagories */}

            {resCat.map((cat , index)=>{   

                return <ResCategory        key={cat?.card?.card.title}        resCategories = {cat?.card?.card}                showMenuItems = {index === showItemData ? true : false}             setShowItemData = { () => index === showItemData? setShowItemData (null): setShowItemData (index)}                            dummy = {dummy} />   // if inedx no 1 is there then expand and make other collapse  // thus based on index number controlling the acordian bheviour thus we can say <ResCategory> is Controlled Component  {/*Passing dummy as a props /prop drilling */}
                                                                                                                                                                                                                            //   
                                                                                                                                                                                                                            // 
                                                                                                                                                                                                                            // 
                                                                                                                                                                                                                            // 
                                                                                                                                                                                                                            // making accordian expand and collapse when click alternatively
            })} 


            {/* <div className="flex">

                <div className="flex">

            <h1>Menu </h1>
            <h1> - {title}</h1>

            </div> */}

{/*            
            <ol>
                {itemCards.map((ele)=>{   

                  return       <li key = {ele.card.info.id}>  {ele.card.info.name} - {" Rs"} {ele.card.info.price/100 || ele.card.info.defaultPrice/100}<br /></li> 
                })}
            </ol> */}

            {/* </div> */}
        
            
           

            

        </div>
    );
};

export default ResturantMenus;