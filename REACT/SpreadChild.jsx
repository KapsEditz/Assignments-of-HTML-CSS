import React from "react";

export default function SpreadChild({fun}) {
    return (
        <>
            <button onClick={fun(1,2,3,4,5,6,7,8,9,10)}>PRINT</button>
        </>
    )
}