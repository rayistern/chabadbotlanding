"use client"

import React from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)

  return (
    <header className="bg-white">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">ChabadAI</span>
            <span className="text-xl font-bold text-gray-900">ChabadAI</span>
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className="sr-only">Open main menu</span>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          <a href="#features" className="text-sm font-semibold leading-6 text-gray-900">
            Features
          </a>
          <a href="#articles" className="text-sm font-semibold leading-6 text-gray-900">
            Blog
          </a>
          <a href="#about" className="text-sm font-semibold leading-6 text-gray-900">
            About
          </a>
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Button variant="outline" className="text-sm font-semibold leading-6 text-gray-900">
            Sign In <span aria-hidden="true">&rarr;</span>
          </Button>
        </div>
      </nav>
      {isMenuOpen && (
        <div className="lg:hidden" role="dialog" aria-modal="true">
          <div className="fixed inset-0 z-10"></div>
          <div className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">ChabadAI</span>
                <span className="text-xl font-bold text-gray-900">ChabadAI</span>
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <X className="h-6 w-6" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  <a href="#features" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                    Features
                  </a>
                  <a href="#articles" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                    Blog
                  </a>
                  <a href="#about" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                    About
                  </a>
                </div>
                <div className="py-6">
                  <Button variant="outline" className="w-full text-base font-semibold leading-7 text-gray-900">
                    Sign In <span aria-hidden="true">&rarr;</span>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
