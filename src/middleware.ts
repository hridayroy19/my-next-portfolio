import { NextRequest, NextResponse } from "next/server";
import { currentUser } from "./services/AuthService";

const authRoutes = ["/login"];

const roleBasedPrivateRoutes = {
    dashboard: [/^\/dashboard/],
};

export const middleware = async (request: NextRequest) => {
    const { pathname } = request.nextUrl;

    // Check if the user is authenticated
    const userInfo = await currentUser();

    // If the user is not authenticated and trying to access a non-auth route
    if (!userInfo) {
        if (authRoutes.includes(pathname)) {
            return NextResponse.next();
        } else {
            return NextResponse.redirect(
                new URL(
                    `http://localhost:3000/login?redirectPath=${pathname}`,
                    request.url
                )
            );
        }
    }

    // Check for role-based routing (e.g., dashboard route)
    if (roleBasedPrivateRoutes.dashboard.some(route => route.test(pathname))) {
        // If user doesn't have the correct role (e.g., admin), redirect them
        if (userInfo.role !== "admin") {
            return NextResponse.redirect(new URL("/", request.url));
        }
    }

    return NextResponse.next();
};

export const config = {
    matcher: [
        "/login",
        "/profile",
        "/dashboard/:path*",
    ],
};
