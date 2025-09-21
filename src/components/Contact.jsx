import React, { useState } from "react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert(`Message sent by ${formData.name}`)
  }

  return (
    <section
      id="contact"
      className="py-16 bg-black text-white min-h-screen flex items-center animate-fade-in-up"
    >
      <div className="max-w-4xl mx-auto px-6 w-full">
        {/* Heading with fade-in */}
        <h2 className="text-4xl font-bold mb-8 text-center animate-fadeIn text-blue-400">
          Contact Me
        </h2>

        <form
          onSubmit={handleSubmit}
          className="bg-gray-900 p-8 rounded-2xl shadow-lg space-y-4 animate-slideUp"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-3 rounded bg-gray-800 text-white outline-none transition-transform duration-300 hover:scale-105"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 rounded bg-gray-800 text-white outline-none transition-transform duration-300 hover:scale-105"
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-3 rounded bg-gray-800 text-white outline-none transition-transform duration-300 hover:scale-105"
            required
          ></textarea>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 py-3 rounded-lg font-semibold transition-transform duration-300 hover:scale-105 hover:-translate-y-1"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  )
}
