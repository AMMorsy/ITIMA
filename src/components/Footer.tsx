import Link from "next/link"

export default function Footer() {
  return (
    <footer className="border-t bg-white dark:border-gray-800 dark:bg-gray-950">
      <div className="mx-auto grid max-w-7xl gap-6 px-4 py-10 md:grid-cols-4">
        <div>
          <div className="mb-3 flex items-center gap-2">
            <div className="h-7 w-7 rounded-md bg-gradient-to-br from-blue-600 to-indigo-600" />
            <span className="font-semibold text-gray-900 dark:text-gray-100">ITIMA</span>
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-300">
            Information Technology for Integration, Management & Administration.
          </p>
        </div>
        <div>
          <h4 className="mb-2 text-sm font-semibold text-gray-900 dark:text-gray-100">Services</h4>
          <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-300">
            <li><Link href="#services">Remote IT Management</Link></li>
            <li><Link href="#services">MSP Packages</Link></li>
            <li><Link href="#services">Cloud Migration</Link></li>
            <li><Link href="#security">Security Hardening</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="mb-2 text-sm font-semibold text-gray-900 dark:text-gray-100">Company</h4>
          <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-300">
            <li><Link href="#about">About</Link></li>
            <li><Link href="#training">Training</Link></li>
            <li><Link href="#contact">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="mb-2 text-sm font-semibold text-gray-900 dark:text-gray-100">Contact</h4>
          <p className="text-sm text-gray-600 dark:text-gray-300">Cairo, Egypt • Remote-first</p>
          <p className="text-sm text-gray-600 dark:text-gray-300">hello@itima.example</p>
        </div>
      </div>
      <div className="border-t dark:border-gray-800">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 text-xs text-gray-500 dark:text-gray-400">
          <span>© {new Date().getFullYear()} ITIMA. All rights reserved.</span>
          <span>Built with Next.js & Tailwind</span>
        </div>
      </div>
    </footer>
  )
}

