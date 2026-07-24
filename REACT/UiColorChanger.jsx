import { createContext, useState } from "react";
import UICOLOR from "./UICOLOR"
export const UseContexttt = createContext()

export default function UiColorChanger() {

    const [color, setColor] = useState()
    const name = "CrewLink"

    function changecolor(newcolor) {
        setColor(newcolor)
    }

    return (
        <UseContexttt.Provider value={{ name, changecolor, color }}>
            <UICOLOR />
        </UseContexttt.Provider>
    )

}
