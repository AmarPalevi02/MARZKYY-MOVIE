import { authOption } from "@/app/api/auth/[...nextauth]/route"
import { getServerSession } from "next-auth"

export const authSeason = async() => {
    const season = await getServerSession(authOption)
    return season?.user
} 