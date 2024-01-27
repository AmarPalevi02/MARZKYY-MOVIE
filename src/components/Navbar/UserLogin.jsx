"use client"
import React, { useEffect, useState } from 'react'
import { authSeason } from "@/utils/auth"
import { authOption } from "@/app/api/auth/[...nextauth]/route"
import { FaRegUser } from "react-icons/fa";
import Link from 'next/link';

const UserLogin = ({ auth }) => {
    const user = async () => {
        const user = await authSeason()
        console.log(user)
    }

    const authUser = user().name


    console.log(authUser)
    // console.log(auth)

    return (
        <>
            <Link href={auth ? '/api/auth/signout' : '/api/auth/signin'}
                className="w-[30px] h-[30px] bg-[#272829] rounded-full flex justify-center items-center text-center"
            >
                {auth ? "LoutOut" : "Login"}
            </Link>
        </>

    )
}

export default UserLogin