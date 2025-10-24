// This is an example of how to protect content using server rendering
import AccessDenied from "components/access-denied"
import { GetServerSideProps } from "next"

export default function Page({ content, session }) {
  // If no session exists, display access denied message
  if (!session) return <AccessDenied />

  // If session exists, display content
  return (
    <>
      <h1>Protected Page (Pages Router SSR)</h1>
      <p>
        <strong>{content}</strong>
      </p>
      <p>
        <em>
          Note: This page uses Pages Router with getServerSideProps in Next.js
          16
        </em>
      </p>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  // For Pages Router in Next.js 16, we fetch the session via the API route
  // This avoids importing actions.js which uses next/headers (App Router only)
  const protocol =
    context.req.headers["x-forwarded-proto"]?.toString() || "http"
  const host = context.req.headers.host
  const sessionUrl = `${protocol}://${host}/auth/session`

  try {
    const sessionRes = await fetch(sessionUrl, {
      headers: {
        cookie: context.req.headers.cookie || "",
      },
    })

    const session = await sessionRes.json()

    if (session?.user) {
      // Note usually you don't need to fetch from an API route in getServerSideProps
      // This is done here to demonstrate how you can fetch from a third-party API
      // with a valid session. Likely you would also not pass cookies but an `Authorization` header
      const hostname =
        process.env.NEXTAUTH_URL ??
        (process.env.VERCEL
          ? "https://next-auth-example-v5.vercel.app"
          : "http://localhost:3000")
      const contentRes = await fetch(`${hostname}/api/examples/protected`, {
        headers: { cookie: context.req.headers.cookie ?? "" },
      })
      return { props: { session, content: await contentRes.json() } }
    }

    return { props: {} }
  } catch (error) {
    console.error("Error fetching session:", error)
    return { props: {} }
  }
}
