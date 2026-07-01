export default function StyleGallery() {
  return (
    <section className="bg-black text-white py-24">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-5xl font-bold text-center">
          Explore AI Styles
        </h2>

        <p className="text-center text-gray-400 mt-4">
          Generate stunning AI photos in hundreds of premium styles.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">

          <div className="h-80 rounded-3xl bg-zinc-800"></div>

          <div className="h-80 rounded-3xl bg-zinc-800"></div>

          <div className="h-80 rounded-3xl bg-zinc-800"></div>

          <div className="h-80 rounded-3xl bg-zinc-800"></div>

        </div>

      </div>
    </section>
  );
}