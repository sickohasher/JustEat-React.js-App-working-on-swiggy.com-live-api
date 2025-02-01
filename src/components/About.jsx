import UserClass from "./UseClass";
import UserFunc from "./UserFunc";


let About = ()=>{

    return (

        <div>

        <div className="main-about"> 
            <h1>This is About Section!</h1>
        </div>

        <div className="about1">
                <UserFunc name = {"Jatin Sa"} location = {"America"}/>    {/* passing props to functional component by parent component */}
            </div>

            <div className="about2">
                <UserClass name = {"Chandrika"} location = {"India"}/>    {/* passing props to class component by parent component */}
            </div>

        </div>
    )
};

export default About;