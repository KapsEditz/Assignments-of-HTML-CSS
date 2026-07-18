import React, { useState } from "react";
import Methodoop from "./assignment1child";

export default function Pmethod() {
    const name = "Suhas"
    const email = "suhashero1108@gmail.com"
    const mobile = 8908908900
    const address = "A-1001, Kfc apartment, near petrol pump, daund"

    function change() {
        name = "Varad"
        email = "varadlohakaneApril2008@gmail.com"
        mobile = 1234567890
        address = "Bhosari cha rhivasi!"
    }

    return (
        <>
            <h3>Q.] Make one parent component file and one child.. add data in parent component like name,email,mobiles, addree.add pass to child component</h3>

            <Methodoop send1={name} />
            <Methodoop send2={email} />
            <Methodoop send3={mobile} />
            <Methodoop send4={address} />

            <button onClick={change}>Click Me!</button>
        </>
    )
}
