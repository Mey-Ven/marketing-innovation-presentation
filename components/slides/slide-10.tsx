export default function Slide10() {
  return (
    <div className="w-full h-full bg-gradient-to-br from-white to-slate-50 flex flex-col px-16 py-12 justify-center">
      <h1 className="text-5xl font-bold text-slate-900 mb-4 text-center">
        Cas d'Étude: Protéines Alternatives
      </h1>

      <div className="grid grid-cols-3 gap-8 flex-1 items-center">
        <div className="group p-8 bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl border border-orange-200 hover:shadow-2xl hover:scale-105 transition-all">
          <div className="text-5xl mb-4">📈</div>
          <h3 className="text-2xl font-bold text-slate-900 mb-2">Marché en Expansion</h3>
          <p className="text-slate-600">Croissance rapide et opportunités illimitées</p>
        </div>

        <div className="group p-8 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl border border-green-200 hover:shadow-2xl hover:scale-105 transition-all">
          <div className="text-5xl mb-4">🌱</div>
          <h3 className="text-2xl font-bold text-slate-900 mb-2">Tendances Alignées</h3>
          <p className="text-slate-600">Réponse aux besoins santé et éthique</p>
        </div>

        <div className="group p-8 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl border border-blue-200 hover:shadow-2xl hover:scale-105 transition-all">
          <div className="text-5xl mb-4">🚀</div>
          <h3 className="text-2xl font-bold text-slate-900 mb-2">Opportunités</h3>
          <p className="text-slate-600">Innovation et potentiel commercial élevé</p>
        </div>
      </div>
    </div>
  );
}
