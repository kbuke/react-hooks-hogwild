import React, { useState } from "react";
import Hogs from "./Hogs";

function PigGreaseFilter({handleClick, greasyPigs}){
    return (
       <div>
         <button className="GreaseFilter" onClick={handleClick}>{greasyPigs? "Show All Pigs" : "Show Greasy Pigs"}</button>
       </div>
    )
}
export default PigGreaseFilter