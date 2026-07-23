import {createContext} from "react";
import UseContext_Parent from "./useContext_child";

export const UseContextt = createContext()
export default function UseContextFun(){
    const namee = "user2";

    return(
        <UseContextt.Provider value={namee}>
            <UseContext_Parent />
        </UseContextt.Provider>
    )
}