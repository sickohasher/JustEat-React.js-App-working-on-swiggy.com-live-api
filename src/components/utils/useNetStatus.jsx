                                                       //Custom hook --- for net status

import {useEffect, useState} from "react";

let useNetStatus = ()=> {       // custom hook

 let[status,setStatus] = useState(true);


  useEffect(()=>{

    window.addEventListener("offline" , ()=>{    // to check whetaher offilne or online and on that basis update the boolen value to a true or false

        setStatus(false);
    })

    window.addEventListener("online" , ()=>{

        setStatus(true);
    })

  }, []);


  return status;


        
};


export default useNetStatus;