import { url } from "inspector";
import { NextResponse, NextRequest } from "next/server";
import { getTokenCookie, getUserInfoCookie } from "./lib/cookies";

const publicRoutes = ["/login", "/register"];

export async function proxy(request: NextRequest){
    const { pathname } = request.nextUrl; // which path
    const token = await getTokenCookie();
    const user = await getUserInfoCookie();
    const isPublicRputes = publicRoutes.some(route => pathname.startsWith(route));
    if(!token && !isPublicRputes){
        return NextResponse.redirect(new URL("/login", request.url));
    }

    if(!token && !isPublicRputes){
        return NextResponse.redirect(new URL("/dashboard", request.url));
    }
    // return NextResponse.redirect(new URL("/login", request.url)); // 
    // return NextResponse.rewrite(new URL("/login", request.url)); // rewrite to api route
    return NextResponse.next(); //
};

export const config = {
    matcher: [
        "/register", // path to appy
        "/dashboard", // added this path also
        "/login", // added this path also
    ]
}