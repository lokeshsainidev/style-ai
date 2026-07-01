export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Upload Your Photos",
      desc: "Upload 10–20 clear photos of yourself.",
    },
    {
      number: "02",
      title: "AI Training",
      desc: "Our AI creates your personal Digital Twin.",
    },
    {
      number: "03",
      title: "Generate Images",
      desc: "Choose any fashion style and generate photos instantly.",
    },
  ];

  return (
    <section className="py-24 px-6 bg-zinc-950 text-white">
      <div className="max-w-7xl mx-auto">

        <h2 className="text-5xl font-bold text-center">
          How It Works
        </h2>

        <div className="grid md:grid-cols-3 gap-8 mt-16">

          {steps.map((step) => (

            <div
              key={step.number}
              className="border border-zinc-800 rounded-2xl p-8 hover:border-blue-500 transition"
            >

              <span className="text-blue-500 text-5xl font-bold">
                {step.number}
              </span>

              <h3 className="text-2xl font-semibold mt-6">
                {step.title}
              </h3>

              <p className="text-gray-400 mt-4">
                {step.desc}
              </p>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}