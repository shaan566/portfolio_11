import React from "react"
import { FaDiceFour } from "react-icons/fa6"

export default function Projects() {
  const education = [
    {
      degree: "MCA (2023 – 2025)",
      place: "SGRR University",
    },
    {
      degree: "BCA (2019 – 2022)",
      place: "MJPR University",
    },
  ]

  const skills = [
    "C++", "Python", "Java", "PHP",
    "HTML/CSS", "MySQL", "Oracle",
    "AWS", "React", "FastAPI",
  ]

  return (
    <section id="resume" className="py-16 bg-gray-100 text-gray-900">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8 text-center">Resume</h2>
        
        {/* Education */}
        <h3 className="text-2xl font-semibold mb-4">Education</h3>
        <ul className="mb-8 space-y-3">
          {education.map((edu, i) => (
            <li key={i} className="p-4 bg-white rounded shadow">
              <p className="font-bold">{edu.degree}</p>
              <p className="text-gray-600">{edu.place}</p>
            </li>
          ))}
        </ul>

        {/* Skills */}
        <h3 className="text-2xl font-semibold mb-4">Skills</h3>
        <div className="flex flex-wrap gap-3">
          {skills.map((skill, i) => (
            <span
              key={i}
              className="px-4 py-2 bg-blue-600 text-white rounded-full text-sm shadow"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

