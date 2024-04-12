import { SignedIn, UserButton } from '@clerk/clerk-react'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="flex-between fixed z-50 w-full bg-dark-1 px-6 py-4 lg:px-10">
    <Link to="/" className="flex items-center gap-1">
      <img
        src="/icons/logo.svg"
        width={32}
        height={32}
        alt="yoom logo"
        className="max-sm:size-10"
      />
      <p className="text-[26px] font-extrabold text-white max-sm:hidden">
        ROOM
      </p>
    </Link>
    <div className="flex-between gap-5">
      <SignedIn>
        <UserButton afterSignOutUrl="/sign-in" />
      </SignedIn>

      {/* <MobileNav /> */}
    </div>
  </nav>
  )
}

export default Navbar
