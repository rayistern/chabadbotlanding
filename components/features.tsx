import React from "react"

const features = [
  {
    title: "Torah Study Assistant",
    description: "Get instant explanations and insights on Torah passages, Talmudic discussions, and Jewish law with our advanced AI."
  },
  {
    title: "Personalized Learning",
    description: "Adaptive learning paths that adjust to your level and interests, making Jewish education more accessible and engaging."
  },
  {
    title: "Multi-Language Support",
    description: "Access content in Hebrew, English, Yiddish, and more with seamless translation and cultural context."
  },
  {
    title: "Halachic Guidance",
    description: "Get reliable guidance on Jewish law and customs with sources and explanations from trusted rabbinic authorities."
  },
  {
    title: "Community Features",
    description: "Connect with fellow learners, share insights, and participate in study groups within our secure platform."
  },
  {
    title: "Instant Answers",
    description: "Ask questions about Jewish texts, traditions, or practices and get comprehensive, well-sourced answers instantly."
  }
]

export default function Features() {
  return (
    <div className="bg-gray-800 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-gray-300">Features</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Powerful Features for Jewish Learning
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Discover how ChabadAI transforms traditional Jewish education with cutting-edge technology.
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
