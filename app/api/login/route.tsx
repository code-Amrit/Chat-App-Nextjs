import { getUser } from "@/core/clients/GetUserService";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const backendRes = await getUser.loginUser(body);

    // 🔴 If backend failed → return error
    if (!backendRes.oAuthToken) {
      return NextResponse.json(
        { message: backendRes.message || "Login failed" },
      );
    }

    // ✅ Success → set cookie
    const response = NextResponse.json({
      message: "Login successful",
      user: backendRes,
    });

    response.cookies.set("session", JSON.stringify(backendRes), {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
    });

    return response;
  } catch (err) {
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}