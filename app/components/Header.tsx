"use client"

import Link from "next/link"
import { useState } from "react"
import { motion } from "framer-motion"

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed w-full bg-gray-900 bg-opacity-80 backdrop-blur-md z-50">
      <nav className="container mx-auto px-6 py-3">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-white">
            <span className="text-yellow-400">South</span> Africa
          </Link>
          <div className="hidden md:flex space-x-6">
            <NavLink href="/">Home</NavLink>
            <NavLink href="/geography">Geography</NavLink>
            <NavLink href="/economy">Economy</NavLink>
            <NavLink href="/culture">Culture</NavLink>
            <NavLink href="/tourism">Tourism</NavLink>
            <NavLink href="/climate">Climate</NavLink>
            <NavLink href="/history">History</NavLink>
          </div>
          <button className="md:hidden text-white focus:outline-none" onClick={() => setIsOpen(!isOpen)}>
            <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
              {isOpen ? (
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828z"
                />
              ) : (
                <path
                  fillRule="evenodd"
                  d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                />
              )}
            </svg>
          </button>
        </div>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden mt-4 space-y-2"
          >
            <NavLink href="/" mobile>
              Home
            </NavLink>
            <NavLink href="/geography" mobile>
              Geography
            </NavLink>
            <NavLink href="/economy" mobile>
              Economy
            </NavLink>
            <NavLink href="/culture" mobile>
              Culture
            </NavLink>
            <NavLink href="/tourism" mobile>
              Tourism
            </NavLink>
            <NavLink href="/climate" mobile>
              Climate
            </NavLink>
            <NavLink href="/history" mobile>
              History
            </NavLink>
          </motion.div>
        )}
      </nav>
    </header>
  )
}

const NavLink = ({ href, children, mobile = false }) => (
  <Link href={href} className={`text-gray-300 hover:text-white transition duration-300 ${mobile ? "block py-2" : ""}`}>
    {children}
  </Link>
)

export default Header

