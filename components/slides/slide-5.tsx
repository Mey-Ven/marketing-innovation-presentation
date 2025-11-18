export default function Slide5() {
  const steps = [
    'Identifier les besoins non satisfaits',
    'Analyser les tendances émergentes',
    'Étudier la concurrence',
    'Segmenter les clients/personas',
  ];

  return (
    <div className="w-full h-full bg-gradient-to-br from-slate-900 to-slate-800 flex flex-col px-16 py-12 justify-center relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl" />

      <div className="relative z-10">
        <h1 className="text-5xl font-bold text-white mb-12">
          Étude de Marché et Client
        </h1>

        <div className="space-y-4">
          {steps.map((step, index) => (
            <div
              key={index}
              className="flex gap-6 p-6 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all group cursor-pointer"
            >
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-cyan-400 flex items-center justify-center text-slate-900 font-bold text-lg flex-shrink-0 group-hover:scale-110 transition-transform">
                {index + 1}
              </div>
              <p className="text-lg text-white/90 group-hover:text-white transition-colors">{step}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
