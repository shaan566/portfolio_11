import React from "react"

const skills = [
  { name: "Java", level: 80, color: "bg-red-500" },
  { name: "Python", level: 90, color: "bg-yellow-500" },
  { name: "C++", level: 75, color: "bg-indigo-500" },
  { name: "PHP", level: 70, color: "bg-purple-500" },
  { name: "JavaScript", level: 85, color: "bg-yellow-400" },
  { name: "React", level: 88, color: "bg-sky-500" },
  { name: "MERN Stack", level: 82, color: "bg-emerald-500" },
  { name: "FastAPI", level: 78, color: "bg-teal-500" },
  { name: "SQL / Databases", level: 80, color: "bg-pink-500" },
  { name: "NumPy & Pandas", level: 83, color: "bg-orange-500" },
  { name: "AI / ML", level: 72, color: "bg-green-500" },
  { name: "AWS", level: 75, color: "bg-blue-600" },
  { name: "Google Cloud", level: 70, color: "bg-cyan-500" },
  { name: "CI/CD Pipeline", level: 68, color: "bg-gray-500" },
]

const badgeSkills = [
  "HTML",
  "CSS",
  "Tailwind CSS",
  "TypeScript",
  "Git & GitHub",
  "REST APIs",
  "Next.js",
  "Django",
  "Node.js",
  "Express.js",
  "MongoDB",
  "PostgreSQL",
  "BeautifulSoup",
  "Selenium",
  "Docker",
  "Vercel",
  "Netlify",
  "VS Code",
  "Jupyter Notebook", // fixed spelling
]

export default function Skills() {
  return (
    <section className="py-20 bg-black text-white animate-fade-in-up">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12 text-center text-blue-400">
          Skills
        </h2>

        {/* Progress Bars */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {skills.map((s) => (
            <div
              key={s.name}
              className="bg-gray-900 p-5 rounded-xl shadow-lg border border-gray-800 hover:border-blue-500 hover:shadow-blue-500/30 transition-all duration-300"
            >
              <div className="flex justify-between mb-2">
                <span className="font-medium">{s.name}</span>
                <span className="text-sm text-gray-400">{s.level}%</span>
              </div>
              <div className="h-3 bg-gray-800 rounded-full overflow-hidden">
                <div
                  className={`h-3 ${s.color} rounded-full transition-all duration-700`}
                  style={{ width: `${s.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Badges */}
        <div className="bg-gray-900 p-6 rounded-xl shadow-lg border border-gray-800">
          <h3 className="text-2xl font-semibold mb-6 text-blue-400">
            Technologies & Tools
          </h3>
          <div className="flex flex-wrap gap-3">
            {badgeSkills.map((b) => (
              <span
                key={b}
                className="px-3 py-1 rounded-full text-sm bg-blue-500/10 text-blue-300 border border-blue-500/30 hover:bg-blue-500/20 transition"
              >
                {b}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
