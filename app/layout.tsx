import "./globals.css"
import { Inter } from "next/font/google"
import Header from "./components/Header"
import Footer from "./components/Footer"
import type React from "react"
import Script from "next/script"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "South Africa | Website",
  description: "Discover the vibrant culture, economy, and beauty of South Africa",
  themeColor: "#000000",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.className} bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-100 antialiased min-h-screen flex flex-col`}
      >
        <div className="flex-grow">
          <Header />
          <main className="pt-16 rounded-lg overflow-hidden">{children}</main>
        </div>
        <Footer />
        <Script id="code-protection" strategy="afterInteractive">
          {`
            function disableRightClick(e) {
              e.preventDefault();
            }

            function disableF12AndCtrlShiftI(e) {
              if (e.keyCode === 123 || (e.ctrlKey && e.shiftKey && e.keyCode === 73)) {
                e.preventDefault();
              }
            }

            function disableViewSource() {
              document.addEventListener('keydown', disableF12AndCtrlShiftI);
              document.addEventListener('contextmenu', disableRightClick);
            }

            function addCopyProtection() {
              const style = document.createElement('style');
              style.textContent = \`
                body {
                  -webkit-user-select: none;
                  -moz-user-select: none;
                  -ms-user-select: none;
                  user-select: none;
                }
              \`;
              document.head.appendChild(style);
            }

            disableViewSource();
            addCopyProtection();
          `}
        </Script>
      </body>
    </html>
  )
}

