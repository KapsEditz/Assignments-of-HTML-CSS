import React, { useEffect, useState } from "react";

function UseEffectt() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log("useEffect hook called!");
    });

    return (
        <div>
            <h2>{count}</h2>
            <button onClick={() => setCount(count + 1)}>
                Increment ++
            </button>
        </div>
    );
}

export default UseEffectt;
