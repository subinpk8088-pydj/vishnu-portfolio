import { FaBriefcase } from "react-icons/fa";

export default function Experience() {
  const experiences = [
    {
      company: "XPayBack Pvt Ltd",
      role: "Software Testing Intern",
      duration: "3 Months",
      points: [
        "Performed Manual Testing",
        "Validated UI/UX workflows",
        "Reported functional defects",
        "Tested mobile applications",
      ],
    },
    {
      company: "Mexilet Technologies",
      role: "Automation Testing Intern",
      duration: "8 Months",
      points: [
        "Created Selenium automation scripts",
        "API Testing using Postman",
        "Website testing",
        "WhatsApp API testing",
      ],
    },
  ];

  return (
    <section id="experience" className="py-28 px-6">

      <div className="max-w-7xl mx-auto">

        <h2 className="text-5xl font-bold mb-16">
          Experience
        </h2>

        <div className="space-y-8">

          {experiences.map((exp, index) => (
            <div
              key={index}
              className="
              bg-white/5
              backdrop-blur-xl
              border border-white/10
              rounded-3xl
              p-8
              hover:border-orange-400
              transition
              "
            >

              <div className="flex items-center gap-4 mb-4">
                <FaBriefcase className="text-orange-400 text-xl" />

                <div>
                  <h3 className="text-2xl font-bold">
                    {exp.company}
                  </h3>

                  <p className="text-zinc-400">
                    {exp.role} • {exp.duration}
                  </p>
                </div>
              </div>

              <ul className="space-y-2 text-zinc-400">

                {exp.points.map((point, i) => (
                  <li key={i}>
                    • {point}
                  </li>
                ))}

              </ul>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}