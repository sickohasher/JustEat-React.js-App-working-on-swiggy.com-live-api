// import Reslist from '../Api/api.jsx';       // importing api datas    // this import is use when default expoert is done

import Resturantcard from "./Resturantcard";      // importing resturant card component

import {useState , useEffect} from "react";                      // importing hook (usestate, useeffect) from react

import ShimmerUi from "./Shimmer";                                  // importing shimmer ui from shimerui component 

import { Link } from "react-router-dom";

import { Res_list } from "../constants/url";

import useNetStatus from "./utils/useNetStatus";


// import statusImg from "../../accests/07_offline_page.png"; 




let Body = ()=>{       // body component


      let [List , setList] = useState([]);    // created a state variable using hook - intiasally value of usestate is given to List(state variable) and to update/modify state variable values we use setList(function)  

      let [filterList , setFilterList] = useState([]);   // copy of list (contain same data)

      let [search , setSearch] = useState("");

            // console.log(List[0].info.avgRating)     // data of reslist is in list  

            

            console.log("Bodyrending" , filterList);


            useEffect(()=>{                       // it is executed after component get render so used to render data which is used to be call after initail render of component - ex api calls etc

                  fetchApiData();                 // function executed

            },[]);

            
            let fetchApiData = async ()=>{       // func that fetches api data

                  let fetchApi = await fetch(Res_list);   // fetching api live 

                  let apiData = await fetchApi.json();

                  // console.log(apiData);       // consoling data recived from fectced api  

                  // setList(apiData.data.cards[4].card.card.gridElements.infoWithStyle.restaurants)   // due to this again component re-render when useeffect is executed and value of local state variable again changes/modified

                  setList(apiData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants); // optional chaning to handle datas
            
                  setFilterList(apiData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);     // copy of list
            
            }


            // if(List.length === 0){            // Shows Shimmer Ui Component on initial render when data is not fetched (ie when data is not present)

            //       return <ShimmerUi/>         // rendring on basis of condition - known as Conditional Rendring
                         
            // }

            let status = useNetStatus()       // using custom hooks for check net status

            if(status === false ){     // if false then update the message (i.e offline)

              return  <h1 className="status">Check your internet connection!!</h1>  
            }
           


    return  List.length === 0   ? ( <ShimmerUi/> ) : (               //Ternary orperator  ---->        // if condition then render shimmerui otherwise render resturant list if api fetched a data

      

      

        <div className="flex flex-wrap mx-32 mt-8 space-x-[25px] justify-evenly"  >

            <div className="flex pl-[450px] absolute">

            <i className="fa-solid fa-magnifying-glass absolute left-[750px] items-center top-[12px]"></i>
                <input className="ml-32  border-black border-2 rounded-md  p-2" type="text" placeholder="Search" value={search} onChange = {(e)=>{

                          
                                      setSearch(e.target.value);           // set value as user type in searchbox

                }} ></input>


                <button className="ml-4 bg-slate-950 text-white rounded-md p-2" onClick={()=>{

                let filterByName =  List.filter((res)=>{

                   return     res.info.name.toLowerCase().includes(search.toLowerCase());     // to filter and search res by name (filtering from list and updating/modifiying filterlist value)
                   });

                   setFilterList(filterByName);      // filterlist value updating 

                }} >Click to Search</button>


               
      



            <button  className="ml-4 bg-slate-950 text-white rounded-md p-2" onClick = { ()=> { 

                const FilterList = List.filter((resturant)=>   {       // to filter resturant with rating above 4 

                   return     resturant.info.avgRating > 4.3;
                }
                  )

                  setFilterList(FilterList);                    // updating/modifiying a state varibale copy value with filterd value (resturants)


             } } > Top Rated Resturants </button> 


            
             



            </div>

               {
                 

                     filterList.map((resturant )=>             // showing data from filterlist 

                    <Link  key = {resturant.info.id} /* key = {index} */ to={"/resturant/" + resturant.info.id}>   < Resturantcard  Resdata = {resturant}/> </Link>


                    )

               }

                   {/*impoting resturant card component */}
            {/* <Resturantcard
                 Resdata = {Reslist[1]}
            />
            <Resturantcard
                  Resdata = {Reslist[2]}
            />
            <Resturantcard
                   Resdata = {Reslist[3]}
            />
            <Resturantcard
                  Resdata = {Reslist[4]}
            />
            <Resturantcard
                  Resdata = {Reslist[5]}
            />
            <Resturantcard
                  Resdata = {Reslist[6]}
            />
            <Resturantcard
                  Resdata = {Reslist[7]}
            /> */}
            {/* <Resturantcard
                  Resdata = {Reslist[8]}
            /> */}
            {/* <Resturantcard/>
            <Resturantcard/>
            <Resturantcard/>
            <Resturantcard/>
            <Resturantcard/>
            <Resturantcard/>
            <Resturantcard/> */}
      </div>
    )
} 


export default Body;