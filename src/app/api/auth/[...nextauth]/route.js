import NextAuth from "next-auth"
import githubAuth from "next-auth/providers/github"

export const authOption = {
    providers: [
        githubAuth({
            clientId: process.env.GITHUB_CLIENT_ID,
            clientSecret: process.env.GITHUB_SECRET
        })
    ],
    secret: process.env.NEXTAUTH_SECRET
}

const handeler = NextAuth(authOption)

export { handeler as GET, handeler as POST }