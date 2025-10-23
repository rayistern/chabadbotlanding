import React from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

const articles = [
  {
    title: "The Future of Torah Study in the Digital Age",
    description: "Exploring how AI technology can enhance traditional Jewish learning while preserving the sacred nature of Torah study.",
    date: "Dec 15, 2023",
    readTime: "5 min read",
    category: "Technology",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=center"
  },
  {
    title: "Understanding Halacha Through AI: A Modern Approach",
    description: "How artificial intelligence can help clarify complex Jewish law questions while maintaining respect for rabbinic authority.",
    date: "Dec 12, 2023",
    readTime: "7 min read",
    category: "Halacha",
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=400&fit=crop&crop=center"
  },
  {
    title: "Building Bridges: AI and Jewish Community",
    description: "The role of technology in strengthening Jewish communities and making learning accessible to everyone.",
    date: "Dec 10, 2023",
    readTime: "4 min read",
    category: "Community",
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=400&h=400&fit=crop&crop=center"
  }
]

export default function Articles() {
  return (
    <div className="bg-gray-900 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-gray-300">Blog</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Featured Articles
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Insights and perspectives on the intersection of technology and Jewish learning.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {articles.map((article, index) => (
            <article key={index} className="flex flex-col items-start">
              <div className="relative w-full">
                <img
                  src={article.image}
                  alt={article.title}
                  className="aspect-square w-full rounded-lg bg-gray-800 object-cover"
                />
                <div className="absolute inset-0 rounded-lg ring-1 ring-inset ring-gray-900/10" />
              </div>
              <div className="flex items-center gap-x-4 text-xs mt-6">
                <time dateTime={article.date} className="text-gray-400">
                  {article.date}
                </time>
                <span className="relative z-10 rounded-full bg-gray-800 px-3 py-1.5 font-medium text-gray-300 hover:bg-gray-700">
                  {article.category}
                </span>
              </div>
              <div className="group relative">
                <h3 className="mt-3 text-lg font-semibold leading-6 text-white group-hover:text-gray-300">
                  <a href="#">
                    <span className="absolute inset-0" />
                    {article.title}
                  </a>
                </h3>
                <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-300">
                  {article.description}
                </p>
              </div>
              <div className="relative mt-8 flex items-center gap-x-4">
                <div className="text-sm text-gray-400">
                  {article.readTime}
                </div>
                <Button variant="ghost" size="sm" className="text-sm font-semibold leading-6 text-white hover:text-gray-300">
                  Read more <ArrowRight className="ml-1 h-3 w-3" />
                </Button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}
