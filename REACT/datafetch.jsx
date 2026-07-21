import React, { useState, useEffect } from "react";
function DataFetch() {
    const [count, setCount] = useState(0);
    const [userData, setUserData] = useState([])

    useEffect(() => {
        async function fetdata() {
            const data = await fetch("https://jsonplaceholder.typicode.com/users")
            const res = await data.json();

            setUserData(res)
        }
        fetdata()
    }, []);

    return (
        <>
            {
                userData.map((users) => (
                    <>
                        <p>{users.name} - {users.phone}</p>
                    </>
                ))
            }
        </>
    )
}

export default DataFetch;
