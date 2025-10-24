import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"
// Commented out to avoid requiring environment variables for development
// import Keycloak from "next-auth/providers/keycloak"
// import GitHub from "next-auth/providers/github"

// import { PrismaClient } from "@prisma/client"
// import { PrismaAdapter } from "@auth/prisma-adapter"
// import SendGrid from "next-auth/providers/sendgrid"
// import Resend from "next-auth/providers/resend"
// import Email from "next-auth/providers/email"

// globalThis.prisma ??= new PrismaClient()

// authConfig.providers.push(
//   // Start server with `pnpm email`
//   Email({ server: "smtp://127.0.0.1:1025?tls.rejectUnauthorized=false" }),
//   SendGrid,
//   Resend
// )

// export const { handlers, auth, signIn, signOut, unstable_update } = NextAuth(
//   (request) => {
//     if (request?.nextUrl.searchParams.get("test")) {
//       return {
//         // adapter: PrismaAdapter(globalThis.prisma),
//         session: { strategy: "jwt" },
//         ...authConfig,
//         providers: [],
//       }
//     }
//     return {
//       // adapter: PrismaAdapter(globalThis.prisma),
//       session: { strategy: "jwt" },
//       ...authConfig,
//     }
//   }
// )

declare module "next-auth" {
  /**
   * Returned by `useSession`, `getSession`, `auth` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    user: {
      /** The user's postal address. */
      address: string
    } & User
  }

  interface User {
    foo?: string
  }
}

export const { handlers, auth, signIn, signOut, unstable_update } = NextAuth({
  debug: true,
  providers: [
    Credentials({
      credentials: { password: { label: "Password", type: "password" } },
      authorize(c) {
        if (c.password !== "password") return null
        return {
          id: "test",
          name: "Test User",
          email: "test@example.com",
        }
      },
    }),
    // GitHub requires AUTH_GITHUB_ID and AUTH_GITHUB_SECRET in .env.local
    // Uncomment and configure .env.local to use GitHub
    // GitHub,

    // Keycloak requires AUTH_KEYCLOAK_ID, AUTH_KEYCLOAK_SECRET, and AUTH_KEYCLOAK_ISSUER in .env.local
    // Uncomment and configure .env.local to use Keycloak
    // Keycloak,
  ],

  callbacks: {
    jwt({ token, trigger, session }) {
      if (trigger === "update") token.name = session.user.name
      return token
    },
  },
  basePath: "/auth",
  session: { strategy: "jwt" },
})
