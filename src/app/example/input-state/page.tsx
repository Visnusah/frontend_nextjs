"use client"
import { HtmlContext } from "next/dist/server/route-modules/pages/vendored/contexts/entrypoints";
import { useState, useEffect, ChangeEvent } from "react";


export default function Page() {
    const [email, setEmail] = useState("");

    const handleChange = (e: ChangeEvent<HTMLInputElement>) =>{
        setEmail(e.target.value);
    };
    const handleSubmit = () =>{
        alert("Submitted email:" + email);
    };

    return (
        <div>
            <label htmlFor="">Email: </label>
            <input type="email" name="email" id="1" className="p-5" placeholder="Enter Your Email Here→" onChange={handleChange} value={email} />
            <button type="button" onClick={handleSubmit}>Submit</button>
        </div>
    );
}