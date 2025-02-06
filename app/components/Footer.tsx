import Link from "next/link"

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-2">South Africa</h3>
            <p className="text-sm">Discover the vibrant culture, economy, and beauty of South Africa</p>
          </div>
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h4 className="text-lg font-semibold mb-2">Quick Links</h4>
            <ul className="text-sm">
              <li>
                <Link href="/" className="hover:text-white transition duration-300">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/economy" className="hover:text-white transition duration-300">
                  Economy
                </Link>
              </li>
              <li>
                <Link href="/livestock" className="hover:text-white transition duration-300">
                  Livestock
                </Link>
              </li>
              <li>
                <Link href="/culture" className="hover:text-white transition duration-300">
                  Culture
                </Link>
              </li>
              <li>
                <Link href="/tourism" className="hover:text-white transition duration-300">
                  Tourism
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-6 text-sm text-center">
          <p>&copy; {new Date().getFullYear()} SA Guide. All rights reserved.</p>
          <p className="mt-2 text-yellow-400">Assigned by T.Atreena | Made by Cooper</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

