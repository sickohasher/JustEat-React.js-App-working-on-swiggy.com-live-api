                                    // custom hook - useResMenu to fetch data of resturant menus


import { useEffect, useState } from "react";
import { Menu_api } from "../../constants/url";


let useResMenu = (id)=>{            // making custom hook taking id as a input


    let [resInfo , setResInfo] = useState(null);

    useEffect(()=>{


        fetchMenuData();    // function to fetch menu datas

    }, [])

    let fetchMenuData = async ()=>{

        let data = await fetch (Menu_api + id);

        let jsonData = await data.json();

        setResInfo( jsonData);    // updating resInfo with fetched menu data

    }




    return resInfo;    // returns redInfo 

}


export default useResMenu;