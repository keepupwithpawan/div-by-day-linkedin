"use client"

import { useSession, signIn, signOut } from "next-auth/react"

export default function Component() {
  const { data: session } = useSession()

    const redirectRepo = () => {
    window.location.href = "https://github.com/keepupwithpawan/div-by-day-linkedin"
  }

  if (session) {
    return (
      <div className="w-full h-[100vh] flex bg-white text-black overflow-hidden sm:flex-col">
        <div id="left" className="w-1/2 sm:w-full  h-full flex items-center justify-center">
          <div id="logo" className="w-[97%] h-[97%] bg-[url(/logo.png)] bg-center bg-cover rounded-md"></div>
        </div>

        <div
          id="right"
          className="w-1/2 sm:w-full  h-full flex flex-col items-center justify-center bg-white"
        >
          <h1 className="text-4xl font-bold mb-5 text-gray-800">DIV BY DAY - DAY 3</h1>
          <p className="w-[50%] mb-7 text-center">Welcome, {session.user?.name}. Day 3 was all about revising Auth JS sign in and basic Tailwind classes.</p>

          <div
            id="button-container"
            className="w-[60%] flex items-center justify-evenly gap-6"
          >
            <button
              onClick={() => signOut()}
              className="w-[45%] px-7 py-5 flex items-center justify-center rounded-[60px] bg-red-600 text-white cursor-pointer"
            >
              <span className="text-lg mr-5">Sign out</span>
              <i className="fas fa-sign-out text-white" aria-hidden></i>
            </button>            
            
          <button
            onClick={() => redirectRepo()}
            className="w-[45%] px-7 py-5 flex items-center justify-center rounded-[60px] bg-black text-white cursor-pointer"
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
    <div className="w-full h-[100vh] flex sm:flex-col sm:items-center bg-white text-black overflow-hidden">
      <div id="left" className="w-1/2 sm:w-full h-full flex items-center justify-center">
        <div id="logo" className="w-[97%] h-[97%] bg-[url(/logo.png)] bg-center bg-cover rounded-md"></div>
      </div>

      <div
        id="right"
        className="w-1/2 sm:w-full h-full flex flex-col items-center justify-center bg-white"
      >
        <h1 className="text-4xl font-bold mb-5 text-gray-800">DIV BY DAY</h1>
        <p className="mb-7">(Please sign-in below to continue)</p>

        <div
          id="button-container"
          className="w-full flex flex-col items-center gap-6"
        >
          <button
            onClick={() => signIn("github")}
            className="w-[60%] px-6 py-4 flex items-center justify-between rounded-[60px] bg-black text-white cursor-pointer"
          >
            <span className="text-lg font-medium">Sign in with GitHub</span>
            <i className="fa-brands fa-github text-2xl text-white" aria-hidden></i>
          </button>

          <button
            onClick={() => signIn("google")}
            className="w-[60%] px-6 py-4 flex items-center justify-between rounded-[60px] bg-white text-black border-1 border-black cursor-pointer"
          >
            <span className="text-lg font-medium">Sign in with Google</span>
            <i className="fa-brands fa-google text-2xl text-black" aria-hidden></i>
          </button>
        </div>
      </div>
    </div>
  )
}
