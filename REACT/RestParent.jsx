import React from "react";
import RestChild from './RestChild'

export default function RestParent() {

    const obj = {
        name: "xyz", address: "abcde", age: "24", mobile: "1234567890"
    }
    return (

        <>
            <RestChild data={obj} />
        </>

    )
}
