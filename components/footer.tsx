import React from "react"
import { Button } from "@/components/ui/button"
import { Mail, Twitter, Github, Linkedin, Youtube, Instagram, ArrowRight } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900">
      {/* Main footer content */}
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
          {/* Company info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <span className="text-3xl font-bold text-white">ChabadAI</span>
            </div>
            <p className="text-gray-300 text-lg leading-7 mb-6 max-w-md">
              Empowering Jewish learning through artificial intelligence. Experience Torah study like never before with our advanced AI platform.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white hover:bg-gray-800">
                <span className="sr-only">Email</span>
                <Mail className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white hover:bg-gray-800">
                <span className="sr-only">Twitter</span>
                <Twitter className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white hover:bg-gray-800">
                <span className="sr-only">GitHub</span>
                <Github className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white hover:bg-gray-800">
                <span className="sr-only">LinkedIn</span>
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white hover:bg-gray-800">
                <span className="sr-only">YouTube</span>
                <Youtube className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white hover:bg-gray-800">
                <span className="sr-only">Instagram</span>
                <Instagram className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-sm font-semibold leading-6 text-white mb-4">Product</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-white text-sm">Features</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white text-sm">Torah Study</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white text-sm">Halacha Guide</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white text-sm">Community</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white text-sm">API</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white text-sm">Pricing</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-sm font-semibold leading-6 text-white mb-4">Support</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-white text-sm">Help Center</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white text-sm">Documentation</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white text-sm">Contact Us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white text-sm">Status</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white text-sm">Blog</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white text-sm">Newsletter</a></li>
            </ul>
          </div>
        </div>

        {/* Contact info */}
        <div className="mt-16 pt-8 border-t border-gray-800">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            <div className="flex items-start space-x-3">
              <div>
                <h4 className="text-sm font-semibold text-white mb-1">Headquarters</h4>
                <p className="text-gray-300 text-sm">770 Eastern Parkway<br />Brooklyn, NY 11213</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div>
                <h4 className="text-sm font-semibold text-white mb-1">Contact</h4>
                <p className="text-gray-300 text-sm">+1 (718) 493-9250<br />info@chabadai.com</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div>
                <h4 className="text-sm font-semibold text-white mb-1">Support Hours</h4>
                <p className="text-gray-300 text-sm">24/7 AI Support<br />Mon-Fri 9AM-6PM EST</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom footer */}
      <div className="bg-gray-950">
        <div className="mx-auto max-w-7xl px-6 py-8 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-wrap justify-center md:justify-start gap-6 text-sm text-gray-400">
              <a href="#" className="hover:text-white">Privacy Policy</a>
              <a href="#" className="hover:text-white">Terms of Service</a>
              <a href="#" className="hover:text-white">Cookie Policy</a>
              <a href="#" className="hover:text-white">Security</a>
              <a href="#" className="hover:text-white">Accessibility</a>
            </div>
            <div className="flex items-center space-x-4">
              <Button className="bg-white text-gray-900 hover:bg-gray-100">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <p className="text-sm text-gray-400">
                &copy; 2024 ChabadAI. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
