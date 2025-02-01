

let Footer =()=>{    // footer component

    return(

        <div className="mt-16 flex items-center" style={{backgroundColor: "#f0f0f0"}}>
           
                <h3 className="h-[50px] w-[560px] space-32 pl-32 ml-32 mt-4 mb-4 text-lg font-bold " >For better experience, download the JustEat app now</h3>
                
                <img className="h-[50px] w-[150px] ml-16 " src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/m/play_store.png"></img>
                <img className="h-[50px] w-[150px] ml-8" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/m/app_store.png"></img>
            
        </div>
    )
}


export default Footer;