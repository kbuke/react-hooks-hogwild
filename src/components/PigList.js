import React from "react";
import Hogs from "./Hogs";

function PigList({allHogDetails}){
    const hogDetail = allHogDetails.map((hog) => {
        return <Hogs key={hog.name} allHogs={hog}/>
    })
    return(
        <div>
            {hogDetail}
        </div>
    )
}

export default PigList