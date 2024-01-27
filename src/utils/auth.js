import { authOption } from "@/app/api/auth/[...nextauth]/route"
import { getServerSession } from "next-auth"

export const authSeason = async() => {
    let season = await getServerSession(authOption)
    return season?.user
} 