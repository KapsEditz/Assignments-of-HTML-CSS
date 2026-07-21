import React, { useState } from "react";
import UserInfo from "./UserInfo";

export default function ContactForm() {

    // This stores values and with the help of this react knows the state of variables are changed so that they re-renders
    // Updation of component is nothing but rendering
    const [userData, setUserData] = useState(
        {
            username: "",
            email: "",
            age : "",
            address : ""
        }
    );

    const [store, setStore] = useState();


    // This function is called whenever input changes
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
            age : "",
            address : ""
        });
    };


    return (
        <>
            <form onSubmit={handleform}>
                
                <input 
                type="text" 
                name="username" 
                placeholder="Enter your Name"
                value={userData.username}
                onChange={handleChange} />
        
                <br />
        
                <input 
                type="number" 
                name="age" 
                placeholder="Enter your Age" 
                value={userData.age}
                onChange={handleChange}/>
 
                <br />
                
                <input 
                type="email" 
                name="email" 
                placeholder="Enter your Email"
                value={userData.email}
                onChange={handleChange} />
                
                <br />
 
                <input 
                type="text" 
                name="address" 
                placeholder="Enter your Address" 
                value={userData.address}
                onChange={handleChange}/>
                
                <br />
                
                <button type="submit">Submit</button>
            </form>

            <UserInfo data={store} />

        </>
    )

}