import {
  FaBug,
  FaCode,
  FaDatabase,
  FaTools
} from "react-icons/fa";

export default function Skills() {

  const skills = [
    "Manual Testing",
    "Functional Testing",
    "Regression Testing",
    "Selenium",
    "Postman",
    "Jira",
    "JMeter",
    "SQL",
    "Python",
    "Java",
    "API Testing",
    "Defect Tracking"
  ];

  return (
    <section id="skills" className="py-28 px-6">

      <div className="max-w-7xl mx-auto">

        <h2 className="text-5xl font-bold mb-12">
          Skills & Tools
        </h2>

        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">

          {skills.map((skill) => (

            <div
              key={skill}
              className="
              bg-white/5
              backdrop-blur-xl
              border border-white/10
              rounded-3xl
              p-6
              hover:border-orange-400
              hover:-translate-y-2
              transition
              "
            >
              <FaBug className="text-orange-400 text-2xl mb-4" />

              <h3 className="font-semibold">
                {skill}
              </h3>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}