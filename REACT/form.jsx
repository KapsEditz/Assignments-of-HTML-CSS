import React, { useState } from "react";

export default function Formm() {

    const [userData, setUserData] = useState(
        {
            username: "",
            email: "",
        }
    );

    const [store, setStore] = useState();

    const handleChange = (e) => {

        const { name, value } = e.target;
        setUserData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleform = (e) => {
        e.preventDefault();
        setStore(userData);
        setUserData({
            username: "",
            email: "",
        });
    };


    return (
        <>
            <form onSubmit={handleform}>
                <input
                    name="username"
                    type="text"
                    value={userData.username}
                    onChange={handleChange}
                    placeholder="Type Username Here!"
                />
                <br />
                <br />

                <input
                    name="email"
                    type="email"
                    value={userData.email}
                    onChange={handleChange}
                    placeholder="Type Email Here!"
                />

                <br/>
                <br/>
                <button type="submit">Submit</button>
            </form>
            <hr />

            {
                store &&
                    <div>
                        <h3>{store.username}</h3>
                        <p>{store.email}</p>
                    </div>
            }
        </>
    );
}