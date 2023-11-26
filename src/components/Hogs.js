import React, { useState } from "react";

function Hogs({allHogs}){
    const [isClicked, setIsClicked] = useState(false)
    const isGreased = allHogs.greased? "Greased" : "Not Greased"

    function handleClick(){
        setIsClicked(!isClicked)
    }

    return(
        <div className="pigTile" onClick={handleClick}>
            <h2 className="Pig Name">{allHogs.name}</h2>
            <img className="Pig Image" src={allHogs.image}/>
            <p className="Pig Speciality">{isClicked? allHogs.specialty : ""}</p>
            <p className="Pig Grease">{isClicked? isGreased : ""}</p>
            <p className="Pig Weight">{isClicked? allHogs.weight : ""}</p>
        </div>
    )
}
export default Hogs