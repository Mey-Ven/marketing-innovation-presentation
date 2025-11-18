export default function Slide12() {
  return (
    <div className="w-full h-full bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 flex flex-col items-center justify-center relative overflow-hidden px-12">
      {/* Decorative elements */}
      <div className="absolute top-10 right-10 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl" />

      <div className="relative z-10 text-center max-w-4xl">
        <h1 className="text-6xl font-bold text-white mb-8">Conclusion</h1>

        <p className="text-2xl text-slate-300 mb-12 leading-relaxed font-light">
          Le marketing d'innovation est essentiel pour rester compétitif
        </p>

        <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-400/30 rounded-2xl p-8 mb-12">
          <p className="text-xl text-slate-200">
            Innover continuellement et anticiper les besoins clients pour créer de la valeur durable
          </p>
        </div>

        <div className="flex justify-center gap-6">
          <div className="w-3 h-3 rounded-full bg-blue-400 animate-pulse" />
          <div className="w-3 h-3 rounded-full bg-purple-400 animate-pulse delay-100" />
          <div className="w-3 h-3 rounded-full bg-cyan-400 animate-pulse delay-200" />
        </div>

        <p className="text-slate-400 mt-8 text-lg">Merci</p>
      </div>
    </div>
  );
}
