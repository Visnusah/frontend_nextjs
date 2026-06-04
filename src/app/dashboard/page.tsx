import { getUserInfoCookie } from "../../../lib/cookies";

export default async function DashboardPage() {
    const userInfo = await getUserInfoCookie();
    return (
        <div>
            <h1>Dashboard</h1>
            <div>welcomne {userInfo?.email || "Not Logged in"}</div>
        </div>
    );
}