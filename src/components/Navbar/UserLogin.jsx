"use client"
import React from 'react'
import { authSeason } from "@/utils/auth"
import { FaRegUser } from "react-icons/fa";
import Link from 'next/link';

const UserLogin = () => {
    const user = async () => {
        const user = await authSeason()
        return user
    }
    const authUser = user()

    return (
        <>
            <Link href={authUser ? '/api/auth/signout' : '/api/auth/signin'}
                className="w-[30px] h-[30px] bg-[#272829] rounded-full flex justify-center items-center text-center"
            >
                {authUser ? <FaRegUser /> : <FaRegUser />}
            </Link>
        </>

    )
}

export default UserLogin