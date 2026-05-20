"use client"
import useCount from "./user-count"

export default function page(){
    //object destructure
    const { count, count2, incrementCount2, decrementCount2, resetCount2} = useCount();
    // use as object
    // const hookCount = useCount();
    // use as hookCount.count, hookCount.incrementCount2() etc

    return(
        <div>
            <div>
                <button onClick={incrementCount2}>Increment Count by 2</button>
                <button onClick={decrementCount2}>Decrement Count by 2</button>
                <button onClick={resetCount2}>Reset Button</button>
            </div>
        </div>
    )
}