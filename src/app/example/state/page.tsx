"use client"; // important (if state/hook is used) ->
import { useState, useEffect } from "react";

export default function Page() {
    const [count, setCount ] = useState(1);
    // count -> variable, setCount -> setter, (1) -> default value
    const handleDecrement = () => {
        setCount(count - 1);
    }

    const [count2, setCount2] = useState(0);
    const counte2Increment = () =>{
        setCount2(count2 -1)
    }
    const counte2Decrement = () =>{
        setCount2(count2 +1)
    }
    const counte2Reset = () =>{
        setCount2(0)
    }

//     useEffect(
//         ()=>{
//             alert("Page started")
//         }, // function
//         [] // dependencies( if empty, runs once when page loads)s
//     );

//     useEffect(()=>{
//         alert("count value change: " + count)
//     },
//     [count]
// );

useEffect (()=>{
    alert("Count Change:" + count2)
},
[]
);
useEffect (()=>{
    if (count2 > 10) {
        alert("Counte2 is greater than 10")
    }
});
useEffect (()=>{
    if (count2 < 0 ) {
        alert("Counte2 is smaller than 0")
        
    }
});



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
            <h1>Tast IN class</h1>
            <div>
                <button className="border" onClick={counte2Increment}> Increment</button>
                <button className="border" onClick={counte2Decrement}> Decrement</button>
                <button className="border" onClick={counte2Reset}> Reset Button</button>
            </div>
        </div>
    );
}
