"use client";

import { useState } from "react";

export default function PropsPage() {
    return (
        <div>
            <SomeComponent/>
        </div>
    );
};

function SomeComponent() {
    const [count, setCount] = useState(0);
    const label = 0;
    const increment = () => setCount(count + 1);
    const decrement = () => setCount(count - 1);
    return (
        <div>
            <p>Count: {count}</p>
            <h1>Props Example</h1>
            <button onClick={increment}>Increment</button>
            <ChildComponent count={count} onDecrement={decrement} label={label}/>
        </div>
    );
};

// {...props} : {..props type}
function ChildComponent(
    { count, onDecrement, label }
    : {
    count: number;
    onDecrement: () => void, 
    label : number
}) {
    return (
    <div>
        Child Component: {count}
        <button onClick={onDecrement}>Decrement (from Child: {count})</button>
        <GrandChildComponent count={count} label={label}/>
    </div>
    );
};

// Props type can be interface
interface GrandChildComponent{count: number,label: number}
function GrandChildComponent({count, label}: GrandChildComponent) {
    return (
    <div>
        GrandChildComponent: {count}
        <p>{label}</p>
    </div>
    );
};