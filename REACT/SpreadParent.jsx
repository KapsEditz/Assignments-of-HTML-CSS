import React, { useState } from "react";
import SpreadChild from './SpreadChild'
export default function SpreadParent(){
    
    // const [nums, updatenums] = useState()
    // const spreadData1 = [1,2,3,4,5,6]
    // const spreadData2 = [7,8,9,10,11,12]

    function Array(...Numbers)
    {
        for(let i in Numbers) {
            console.log(Numbers);
        }
    }

    return(
        <>
            <SpreadChild fun = {Array} />
        </>
    )
}