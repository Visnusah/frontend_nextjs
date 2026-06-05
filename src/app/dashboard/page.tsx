"use client"; // to use context must be client
import Link from "next/link";
//import { getUserInfoCookie } from "../../../lib/cookies";
import { useAuth } from "../../../lib/context/AuthContext";

export default function DashboardPage() {
  // const userInfo = await getUserInfoCookie();
  const { user, logout } = useAuth();
  return (
    <div>
        <h1>Dashboard</h1>
      {
      user && 
      /* <div>welcome {userInfo?.email || "Not Logged in"}</div> */
      <div>welcome {user?.email || "Not Logged in"}
      <button onClick={logout}>Logout</button>
      </div>
      } {
        !user && 
        <div>
            <Link href={"example/react-hookform/login-with-zod"}>Login</Link>
            <Link href={"example/react-hookform/register-with-zod"}>Register</Link>
        </div>
      }
    </div>
  );
}
