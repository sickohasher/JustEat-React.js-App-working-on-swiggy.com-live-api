import { useState} from "react"


let UserFunc = (props)=>{       // func based component

    let [count,setCount] = useState(0);

    return (
        <div className="user1-main">
                   
                   <p>Function Based Component</p>
                   <h1>Count = {count}</h1>  
                   <button onClick={()=>{
                             
                             setCount(count+1);

                   }}>Update</button>
                   <h1>Name:{props.name}</h1>
                   <h2>Location:{props.location}</h2>

        </div>
    )
};

export default UserFunc;