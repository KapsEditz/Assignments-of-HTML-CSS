import React, { useContext } from "react";
import { UseContextt } from "./useContext";

export default function UseContext_Parent() {
    const namee = useContext(UseContextt)

    return (
        <>
            <p>
                { namee }
            </p>
        </>
    )
}