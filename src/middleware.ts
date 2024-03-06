import { NextRequest, NextResponse } from "next/server";
export const config = {
	matcher: ["/((?!api|.*\\..*).*)"],
};

const protectedRoutes = ["/sign-in"];

export default async function middleware(req: NextRequest) {
	const user = "admin";

	if (user && protectedRoutes.includes(req.nextUrl.pathname)) {
		return NextResponse.redirect(new URL("/", req.nextUrl));
	} else if (!user && !protectedRoutes.includes(req.nextUrl.pathname)) {
		return NextResponse.redirect(new URL("/sign-in", req.url));
	}
	return NextResponse.next();
}
