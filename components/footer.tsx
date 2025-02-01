import Link from "next/link"
import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-purple-900 text-white">
      <div className="container py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="text-lg font-semibold mb-4">About TYPNI</h3>
            <p className="text-purple-100">
              The Young People's Network International empowers youth through connection, innovation, and action.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-purple-100 hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/programs" className="text-purple-100 hover:text-white">
                  Programs
                </Link>
              </li>
              <li>
                <Link href="/events" className="text-purple-100 hover:text-white">
                  Events
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-purple-100 hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2 text-purple-100">
              <li>Email: info@typni.com</li>
              <li>Phone: +1 (555) 123-4567</li>
              <li>Address: Global Headquarters</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <Link href="#" className="text-purple-100 hover:text-white">
                <Facebook className="h-6 w-6" />
              </Link>
              <Link href="#" className="text-purple-100 hover:text-white">
                <Twitter className="h-6 w-6" />
              </Link>
              <Link href="#" className="text-purple-100 hover:text-white">
                <Instagram className="h-6 w-6" />
              </Link>
              <Link href="#" className="text-purple-100 hover:text-white">
                <Youtube className="h-6 w-6" />
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-purple-800">
          <p className="text-center text-purple-100">
            © {new Date().getFullYear()} TYPNI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

