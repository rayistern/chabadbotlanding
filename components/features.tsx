import React from "react"

const features = [
  {
    title: "Prompt Library",
    description: "Domain-specific prompts tailored for Chabad shluchim. Accelerate your workflow with pre-built templates for common tasks.",
    image: "/1.png"
  },
  {
    title: "Knowledge Base",
    description: "Centralized access to resources, best practices, and institutional knowledge. Find what you need, when you need it.",
    image: "/2.png"
  },
  {
    title: "Integrations",
    description: "Seamlessly connect with your existing tools and workflows. Built for productivity, designed for collaboration.",
    image: "/3.png"
  },
  {
    title: "Torah Access",
    description: "3,000 years of knowledge meets artificial wisdom. Explore Torah texts with AI-powered insights and context.",
    image: "/1.png"
  },
  {
    title: "Collaboration Tools",
    description: "Work together across continents. Share insights, coordinate efforts, and amplify your impact.",
    image: "/2.png"
  },
  {
    title: "AI-Powered Productivity",
    description: "From concern to empowerment. From redundancy to infinity. Tools that understand your mission.",
    image: "/3.png"
  }
]

export default function Features() {
  return (
    <div className="bg-gray-800 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-gray-300">The Acceleration</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Humanity 2.0
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            We're not just keeping up with AI acceleration—we're leading the conversation about what it means to be human when intelligence becomes infinite.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature, index) => (
              <div key={index} className="flex flex-col">
                <dt className="text-base font-semibold leading-7 text-white">
                  {feature.title}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-300">
                  <p className="flex-auto">{feature.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
