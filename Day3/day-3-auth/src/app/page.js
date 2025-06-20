"use client"

import { useSession, signIn, signOut } from "next-auth/react"

export default function Component() {
  const { data: session } = useSession()

  const redirectRepo = () => {
    window.location.href = "https://github.com/keepupwithpawan/div-by-day-linkedin"
  }

  if (session) {
    return (
      <div className="w-full min-h-screen flex flex-col md:flex-row bg-white text-black overflow-hidden">
        {/* Left */}
        <div className="w-full md:w-1/2 h-[100vh] lg:h-[100vh] md:h-[100vh] sm:h-[60vh] flex items-center justify-center">
          <div className="w-[97%] h-[97%] bg-[url(/logo.png)] bg-center bg-cover rounded-md aspect-square md:aspect-auto"></div>
        </div>

        {/* Right */}
        <div className="w-full md:w-1/2 flex flex-col items-center justify-center p-8 md:p-0 text-center">
          <h1 className="text-4xl font-bold mb-5 text-gray-800">DIV BY DAY - DAY 3</h1>
          <p className="w-[90%] md:w-[50%] mb-7">
            Welcome, {session.user?.name}. Day 3 was all about revising Auth JS sign in and basic Tailwind classes.
          </p>

          <div className="w-full md:w-[60%] flex flex-col sm:flex-row items-center justify-center gap-6">
            <button
              onClick={() => signOut()}
              className="w-full sm:w-[45%] px-7 py-5 flex items-center justify-center rounded-[60px] bg-red-600 text-white"
            >
              <span className="text-lg mr-5">Sign out</span>
              <i className="fas fa-sign-out text-white" aria-hidden></i>
            </button>

            <button
              onClick={redirectRepo}
              className="w-full sm:w-[45%] px-7 py-5 flex items-center justify-center rounded-[60px] bg-black text-white"
            >
              <span className="text-lg mr-5">Repo</span>
              <i className="fa-brands fa-github text-xl text-white" aria-hidden></i>
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="w-full min-h-screen flex flex-col md:flex-row bg-white text-black overflow-hidden">
      {/* Left */}
      <div className="w-full md:w-1/2 h-[100vh] lg:h-[100vh] md:h-[100vh] sm:h-[60vh] flex items-center justify-center">
        <div className="w-[97%] h-[97%] bg-[url(/logo.png)] bg-center bg-cover rounded-md"></div>
      </div>

      {/* Right */}
      <div className="w-full md:w-1/2 flex flex-col items-center justify-center p-8 md:p-0 text-center">
        <h1 className="text-4xl font-bold mb-5 text-gray-800">DIV BY DAY</h1>
        <p className="mb-7">(Please sign-in below to continue)</p>

        <div className="w-full md:w-[60%] flex flex-col items-center gap-6">
          <button
            onClick={() => signIn("github")}
            className="w-full px-6 py-4 flex items-center justify-between rounded-[60px] bg-black text-white"
          >
            <span className="text-lg font-medium">Sign in with GitHub</span>
            <i className="fa-brands fa-github text-2xl text-white" aria-hidden></i>
          </button>

          <button
            onClick={() => signIn("google")}
            className="w-full px-6 py-4 flex items-center justify-between rounded-[60px] bg-white text-black border border-black"
          >
            <span className="text-lg font-medium">Sign in with Google</span>
            <i className="fa-brands fa-google text-2xl text-black" aria-hidden></i>
          </button>
        </div>
      </div>
    </div>
  )
}
