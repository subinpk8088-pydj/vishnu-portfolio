export default function Certifications() {

  const certs = [
    "Software Testing - STC Technologies",
    "Selenium Web Automation using Python - Udemy",
  ];

  return (
    <section className="py-28 px-6">

      <div className="max-w-7xl mx-auto">

        <h2 className="text-5xl font-bold mb-16">
          Certifications
        </h2>

        <div className="grid md:grid-cols-2 gap-8">

          {certs.map((cert, index) => (

            <div
              key={index}
              className="
              bg-white/5
              border border-white/10
              rounded-3xl
              p-8
              "
            >
              <h3 className="text-xl font-semibold">
                {cert}
              </h3>
            </div>

          ))}

        </div>

      </div>

    </section>
  );
}