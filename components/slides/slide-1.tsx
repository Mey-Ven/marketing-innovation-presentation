export default function Slide1() {
  return (
    <div className="w-full h-full bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex flex-col items-center justify-center relative overflow-hidden px-12">
      {/* Decorative background elements */}
      <div className="absolute top-10 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl" />

      <div className="relative z-10 text-center max-w-4xl">
        <div className="mb-6 inline-block">
          <div className="text-blue-400 text-lg font-semibold tracking-widest uppercase">
            Présentation Stratégique
          </div>
        </div>

        <h1 className="text-6xl md:text-7xl font-bold text-white mb-6 leading-tight">
          Marketing d'Innovation
        </h1>

        <h2 className="text-2xl md:text-3xl text-slate-300 mb-8 font-light">
          Stratégies et Tendances 2024-2025
        </h2>

        <p className="text-lg text-slate-400 mb-12 max-w-3xl mx-auto">
          Créer de la valeur, dépasser la concurrence, anticiper les besoins clients
        </p>

        <div className="flex justify-center gap-4">
          <div className="w-2 h-2 rounded-full bg-blue-500" />
          <div className="w-2 h-2 rounded-full bg-purple-500" />
          <div className="w-2 h-2 rounded-full bg-cyan-500" />
        </div>
      </div>
    </div>
  );
}
