import React, { useContext } from "react";
import { UseContexttt } from "./UiColorChanger";

export default function UICOLOR() {
    const { name, color, changecolor } = useContext(UseContexttt)
    return (
        <>
            <h1 style={{ color: color}}>{name}</h1>
            <br />
            <button onClick={() => changecolor("red")}>RED</button>
            <button onClick={() => changecolor("blue")}>BLUE</button>
            <button onClick={() => changecolor("green")}>GREEN</button>
            <button onClick={() => changecolor("yellow")}>YELLOW</button>
            <button onClick={() => changecolor("white")}>WHITE</button>
            <button onClick={() => changecolor("grey")}>GREY</button>
            <button onClick={() => changecolor("black")}>BLACK</button>
        </>
    )
}
