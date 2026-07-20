import React from "react";

export default function RestChild({ data }) {

    const { name, address, age, mobile } = data
    return (
        <>
            <h3>This is a Example of Rest Operator</h3>
            <h2>Name : {name}</h2>
            <h2>Address : {address}</h2>
            <h2>Age : {age}</h2>
            <h2>Mobile : {mobile}</h2>
        </>
    )
}
