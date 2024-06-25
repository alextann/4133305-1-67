import { NextResponse } from "next/server";

export function middleware(request){
    return NextResponse.request(new URL('/',request.url))
}
export const config = {
    matcher: ["/blog/:path*"]
}