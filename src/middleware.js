// middleware.js
import { NextResponse } from "next/server";

export function middleware(req) {
  const token = req.cookies.get("user")?.value;

  const protectedRoutes = ["/myhof", "/profile"];

  const path = req.nextUrl.pathname;

  // If trying to access a protected route without token
  if (protectedRoutes.some((route) => path.startsWith(route)) && !token) {
    const loginUrl = new URL("/login", req.url);
    loginUrl.searchParams.set("message", "not-authorized");
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/profile/:path*", "/myhof/:path*"],
};
