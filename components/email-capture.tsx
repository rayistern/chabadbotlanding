"use client"

import React, { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"

declare global {
  interface Window {
    ml?: any;
  }
}

export default function EmailCapture() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)

  useEffect(() => {
    // Load MailerLite script
    const script = document.createElement('script')
    script.src = 'https://assets.mailerlite.com/js/universal.js'
    script.async = true
    document.body.appendChild(script)

    script.onload = () => {
      if (window.ml) {
        window.ml('account', '905221')
      }
    }

    return () => {
      document.body.removeChild(script)
    }
  }, [])

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    const form = e.currentTarget
    const formData = new FormData(form)

    try {
      const response = await fetch(form.action, {
        method: 'POST',
        body: formData,
        mode: 'no-cors'
      })

      setShowSuccess(true)
      form.reset()
    } catch (error) {
      console.error('Form submission error:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  if (showSuccess) {
    return (
      <div className="bg-gradient-to-r from-green-500 to-blue-500 rounded-lg p-8 text-center text-white">
        <h4 className="text-2xl font-bold mb-2">Get Ready!</h4>
        <p className="text-lg">
          You're in line for ecommerce awesomeness.{" "}
          <a href="/contact" className="underline font-semibold hover:text-green-100">
            Schedule a call
          </a>
        </p>
      </div>
    )
  }

  return (
    <form
      className="ml-block-form"
      action="https://assets.mailerlite.com/jsonp/905221/forms/118265804464588098/subscribe"
      method="post"
      target="_blank"
      onSubmit={handleSubmit}
    >
      <div className="ml-form-formContent">
        <div className="ml-form-fieldRow ml-last-item">
          <div className="ml-field-group ml-field-email ml-validate-email ml-validate-required">
            <input
              aria-label="email"
              aria-required="true"
              type="email"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all mb-4"
              name="fields[email]"
              placeholder="seller@website.com"
              autoComplete="email"
              required
            />
          </div>
        </div>
      </div>

      <input type="hidden" name="ml-submit" value="1" />
      <input type="hidden" name="anticsrf" value="true" />

      <div className="ml-form-embedSubmit flex flex-col sm:flex-row gap-3">
        <Button
          type="submit"
          disabled={isSubmitting}
          className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white font-semibold px-8 py-6 rounded-full text-lg"
        >
          {isSubmitting ? "Joining..." : "Join the waitlist"}
        </Button>
        
        <a
          href="/contact"
          className="inline-flex items-center justify-center bg-white text-gray-900 border-2 border-gray-300 hover:border-gray-400 font-semibold px-8 py-6 rounded-full text-lg transition-colors"
        >
          <i className="fa-solid fa-headset mr-2"></i> Schedule a Call
        </a>
      </div>
    </form>
  )
}
