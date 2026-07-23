import React, { useState, useEffect } from "react";
function DataFetch() {
    const [count, setCount] = useState(0);
    const [userData, setUserData] = useState([])

    const [search, setSearch] = useState([])

    // useEffect(() => {
    //     async function fetdata() {
    //         const data = await fetch("https://jsonplaceholder.typicode.com/users")
    //         const res = await data.json();

    //         setUserData(res)
    //     }
    //     fetdata()
    // }, []);

    async function Fetchuserdata() {
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/users"
        );
        const data = await response.json();
        setUserData(data);
    }

    return (
        <>
            <button onClick={Fetchuserdata}>FETCH</button>
            <input
                type="text" 
                placeholder="Search by Name" 
                value={search} 
                onChange={(e) => setSearch(e.target.value)} 
            />
            
            {/* {
                userData.map((users) => (
                    <>
                        <p>{users.id} <br /> {users.name} <br /> {users.phone} <br /> {users.email} <br /> {users.username}</p><br />
                    </>
                ))
            } */}
            
            
            {
                userData.filter((user) =>
                user.name.toLowerCase().includes(search)
                ).map((users) => (
                
                    <div>
                        <h3>{users.name}</h3>
                        <p>{users.phone}</p>
                    </div>
    
            ))
            }
        </>
    )
}

export default DataFetch;
