"user client"; // client component
// any time you use hook/states use client
import { useRouter } from "next/router"; // hook
import { userAgent } from "next/server";

export default function RedirectClient() {
    const router = useRouter();
    const changeUrl = () =>{
        router.push("/example/link"); // function redirect
    }
    return (
        <div>
            <button onClick={changeUrl}>Go to Link Page</button>
        </div>
    );
}