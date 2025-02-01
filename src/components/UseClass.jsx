import React from "react";

import UserContext from "./utils/UserContext";

class UserClass extends  React.Component{      //class based component

    constructor(props){        // reciving props in from ob single js object in constructor

        super(props);

        this.state = {         // creating state variable inside this this.state(big object)

               count : 1,

        }
    }

    render(){

        let {name, location} = this.props;      // accesing and destrcture value of props using 'this' keywords

        let {count} = this.state;         

        return(
            <div>
                <p>Class Based Component</p>

               

                <h1>Count = {count}</h1>
                <button onClick={()=>{
                           
                           this.setState({      // to update the value of state variables use this.setState(big obj)

                                  count : this.state.count+1,     // give state variable and its update condition/ value in form of objects  

                           })

                }}>Update</button>
                                                      
        
                <h1>Name:{name}</h1>
                <h2>Location:{location}</h2>

                <div>
            <UserContext.Consumer>         
                {({loggedInUser})=> <h1 className="font-bold" > User: <span className="font-bold">{ loggedInUser} </span> </h1>}   
            </UserContext.Consumer>
        </div>

        {/*  .consumer help in accesing context-data in cls based component */}   {/*  Using context-data in class based component */}
                
            </div>

            
        )
    }

};

export default UserClass;