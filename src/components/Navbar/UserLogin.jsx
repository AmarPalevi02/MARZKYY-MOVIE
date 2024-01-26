"use client"
import React, { useEffect, useState } from 'react'
import { authSeason } from "@/utils/auth"
import { FaRegUser } from "react-icons/fa";
import Link from 'next/link';

const UserLogin = () => {
    const [authUser, setAuthUser] = useState(null)

    const handelerAuth = async () => {
        const userLogin = await authSeason()
        setAuthUser(userLogin)
    }

    useEffect(() => {
        handelerAuth()
    }, [])

    const actionLogin = authUser ? "Logout" : <FaRegUser />
    const urlLogout = authUser ? "/api/auth/signout" : "/api/auth/signin"

    return (
        <>
            <Link href={urlLogout}
                className="w-[30px] h-[30px] bg-[#272829] rounded-full flex justify-center items-center text-center"
            >
                {actionLogin}
            </Link>
        </>

    )
}

export default UserLogin