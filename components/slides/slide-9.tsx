export default function Slide9() {
  return (
    <div className="w-full h-full bg-gradient-to-br from-slate-900 to-slate-800 flex flex-col px-16 py-12 justify-center">
      <h1 className="text-5xl font-bold text-white mb-12 text-center">
        Tendances 2024 – Durabilité
      </h1>

      <div className="grid grid-cols-3 gap-8">
        <div className="group p-8 bg-gradient-to-br from-green-500/10 to-emerald-500/10 rounded-2xl border border-green-500/30 hover:border-green-500/60 hover:bg-green-500/20 transition-all">
          <div className="text-5xl mb-4">🌍</div>
          <h3 className="text-2xl font-bold text-white mb-3">71% des Consommateurs</h3>
          <p className="text-green-100">Privilégient les produits locaux</p>
        </div>

        <div className="group p-8 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-2xl border border-blue-500/30 hover:border-blue-500/60 hover:bg-blue-500/20 transition-all">
          <div className="text-5xl mb-4">♻️</div>
          <h3 className="text-2xl font-bold text-white mb-3">Emballages</h3>
          <p className="text-blue-100">Emballages compostables</p>
        </div>

        <div className="group p-8 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-2xl border border-purple-500/30 hover:border-purple-500/60 hover:bg-purple-500/20 transition-all">
          <div className="text-5xl mb-4">💡</div>
          <h3 className="text-2xl font-bold text-white mb-3">Responsabilité</h3>
          <p className="text-purple-100">Santé & éthique</p>
        </div>
      </div>
    </div>
  );
}
