import { FaArrowRight } from "react-icons/fa";

export default function Projects() {

  const projects = [
    {
      title: "Manual Testing Project",
      desc: "Prepared and executed test cases covering functional, regression and smoke testing."
    },
    {
      title: "API Testing",
      desc: "Validated REST APIs using Postman, response verification and status code validation."
    },
    {
      title: "Selenium Automation",
      desc: "Automated login flows, forms and workflow validation using Selenium."
    }
  ];

  return (
    <section id="projects" className="py-28 px-6">

      <div className="max-w-7xl mx-auto">

        <h2 className="text-5xl font-bold mb-16">
          Projects
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {projects.map((project, index) => (

            <div
              key={index}
              className="
              bg-white/5
              border border-white/10
              backdrop-blur-xl
              rounded-3xl
              p-8
              hover:border-orange-400
              hover:-translate-y-2
              transition
              "
            >

              <h3 className="text-2xl font-bold mb-4">
                {project.title}
              </h3>

              <p className="text-zinc-400 leading-7">
                {project.desc}
              </p>

              <button className="mt-6 text-orange-400 flex items-center gap-2">
                View Details
                <FaArrowRight />
              </button>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}