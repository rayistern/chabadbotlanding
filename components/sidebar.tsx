"use client"

import React from "react"
import { Button } from "@/components/ui/button"
import { LogIn, Settings } from "lucide-react"

const navigation = [
  { name: 'Home', href: '#', current: true },
  { name: 'Features', href: '#features', current: false },
  { name: 'Blog', href: '#articles', current: false },
  { name: 'About', href: '#about', current: false },
]

const features = [
  { name: 'Torah Study' },
  { name: 'AI Learning' },
  { name: 'Multi-Language' },
  { name: 'Halacha Guide' },
  { name: 'Community' },
]

export default function Sidebar() {
  return (
    <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
      <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-gray-900 px-6 pb-4">
        <div className="flex h-16 shrink-0 items-center">
          <span className="text-2xl font-bold text-white">ChabadAI</span>
        </div>
        <nav className="flex flex-1 flex-col">
          <ul role="list" className="flex flex-1 flex-col gap-y-7">
            <li>
              <ul role="list" className="-mx-2 space-y-1">
                {navigation.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className={`group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold ${
                        item.current
                          ? 'bg-gray-800 text-white'
                          : 'text-gray-300 hover:text-white hover:bg-gray-800'
                      }`}
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </li>
            <li>
              <div className="text-xs font-semibold leading-6 text-gray-400">Features</div>
              <ul role="list" className="-mx-2 mt-2 space-y-1">
                {features.map((feature) => (
                  <li key={feature.name}>
                    <a
                      href="#"
                      className="group flex gap-x-3 rounded-md p-2 text-sm leading-6 text-gray-300 hover:text-white hover:bg-gray-800"
                    >
                      {feature.name}
                    </a>
                  </li>
                ))}
              </ul>
            </li>
            <li className="mt-auto">
              <div className="space-y-2">
                <Button className="w-full bg-gray-800 text-white hover:bg-gray-700">
                  <LogIn className="h-4 w-4 mr-2" />
                  Sign In
                </Button>
                <Button variant="outline" className="w-full border-gray-700 text-gray-300 hover:bg-gray-800">
                  <Settings className="h-4 w-4 mr-2" />
                  Settings
                </Button>
              </div>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  )
}
