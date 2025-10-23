import React from "react"
import Sidebar from "@/components/sidebar"
import Hero from "@/components/hero"
import Features from "@/components/features"
import Articles from "@/components/articles"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900">
      <Sidebar />
      <div className="lg:pl-72">
        <main>
          <Hero />
          <div className="relative z-30">
            <Features />
            <Articles />
          </div>
        </main>
        <Footer />
      </div>
    </div>
  )
}
