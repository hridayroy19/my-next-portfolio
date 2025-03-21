"use server"
import { jwtDecode } from "jwt-decode"
import { cookies } from "next/headers";

type Iuser = {
    email: string
    password: string
}

export const loginUser = async (formData: Iuser) => {
    console.log(formData)
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/api/auth/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        })
        const result = await res.json()
        console.log(result.token, "token dekhbo")

        if (result.status && result.token) {
            (await cookies()).set("accessToken", result.token, {
                httpOnly: true,
                secure: process.env.NODE_ENV === "production",
                path: "/",
                maxAge: 60 * 60 * 24 * 7, // 7 Days
            })
        }
        return result
    } catch (error) {
        console.error(error)
    }
}


export const currentUser = async () => {

    const accessToken = (await cookies()).get("accessToken")?.value;
    // console.log(accessToken)
    let decodedData = null
    if (accessToken) {
        decodedData = await jwtDecode(accessToken);
        return decodedData;
    }
    else {
        return null
    }
}


export const logout = async () => {
    (await cookies()).delete("accessToken")
}