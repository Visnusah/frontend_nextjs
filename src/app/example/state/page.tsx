"use client"; // important (if state/hook is used) ->
import { useState, useEffect } from "react";

export default function Page() {
    const [count, setCount] = useState(1);
    // count -> variable, setCount -> setter, (1) -> default value
    const handleDecrement = () => {
        setCount(count - 1);
    }

    useEffect(
        ()=>{
            alert("Page started")
        }, // function
        [] // dependencies( if empty, runs once when page loads)s
    );

    useEffect(()=>{
        alert("count value change: " + count)
    },
    [count]
);


    return (
        <div>
            <div>
                count value :{ count}
                <button
                className="border"
                onClick={()=>{setCount(count+1)}}
                >
                    Increment
                </button>
                <button
                className="border"
                onClick={handleDecrement}
                >
                    Decrement
                </button>
            </div>
        </div>
    );
}
