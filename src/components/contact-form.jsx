import React, { useState } from "react"
import { z } from "zod"
import SuccessModal from "./success-modal"

// Define the Zod schema with required fields
const contactSchema = z.object({
  name: z.string().min(3, "Name must be at least 3 characters").max(50, "Name must be less than 50 characters"),
  email: z
    .string()
    .min(4, "Email must be at least 4 characters")
    .max(50, "Email must be less than 50 characters")
    .email("Please enter a valid email address")
    .refine((email) => email.includes("@"), "Email must contain @ symbol"),
  message: z
    .string()
    .min(50, "Message must be at least 50 characters")
    .max(500, "Message must be less than 500 characters"),
})

export default function ContactForm({ content }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState("")
  const [showSuccessModal, setShowSuccessModal] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))

    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }))
    }

    if (submitStatus) {
      setSubmitStatus("")
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setErrors({})
    setSubmitStatus("")

    try {
      // Validate form data using Zod schema
      const validatedData = contactSchema.parse(formData)

      // Send form data to the backend
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(validatedData),
      })

      if (response.ok) {
        setShowSuccessModal(true)
        setFormData({ name: "", email: "", message: "" })
        setSubmitStatus("success")
      } else {
        setSubmitStatus("error")
      }
    } catch (error) {
      if (error instanceof z.ZodError && error.errors) {
        // Map Zod errors to form field errors
        const fieldErrors = {}
        error.errors.forEach((err) => {
          fieldErrors[err.path[0]] = err.message
        })
        setErrors(fieldErrors)
      } else {
        console.error("Form submission error:", error)
        setSubmitStatus("error")
      }
    } finally {
      setIsSubmitting(false)
    }
  }

  const closeSuccessModal = () => {
    setShowSuccessModal(false)
  }

  return (
    <>
      <div className="bg-white rounded-lg p-8">
        {/* Display error message at the top of the form if there is an error */}
        {submitStatus === "error" && (
          <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700">
            Sorry, there was an error sending your message. Please try again.
          </div>
        )}

        <h2 className="text-2xl font-semibold text-gray-800 mb-6">{content.formTitle}</h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name Field */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
              {content.nameLabel}
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder={content.namePlaceholder}
              className={`w-full px-4 py-3 border border-black rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors ${
                errors.name ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
          </div>

          {/* Email Field */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
              {content.emailLabel}
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder={content.emailPlaceholder}
              className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors ${
                errors.email ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
          </div>

          {/* Message Field */}
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
              {content.messageLabel}
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder={content.messagePlaceholder}
              rows={5}
              className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-none ${
                errors.message ? "border-red-500" : "border-gray-300"
              }`}
            />
            <div className="flex justify-between items-center mt-1">
              {errors.message && <p className="text-sm text-red-600">{errors.message}</p>}
              <p className="text-sm text-gray-500 ml-auto">{formData.message.length}/500 characters</p>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-medium py-3 px-6 rounded-lg transition-colors"
          >
            {isSubmitting ? content.submittingText : content.submitButton}
          </button>
        </form>
      </div>

      {/* Success Modal */}
      <SuccessModal
        isOpen={showSuccessModal}
        onClose={closeSuccessModal}
        content={{
          successTitle: content.successTitle || "Message Sent Successfully!",
          successDescription:
            content.successDescription || "Thank you for your message. We'll get back to you within 24 hours.",
          closeButton: content.closeButton || "Close",
        }}
      />
    </>
  )
}
