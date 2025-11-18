export default function Slide11() {
  const risks = [
    { icon: '⚠️', title: 'Taux d\'Échec', description: 'Nombreux produits échouent' },
    { icon: '🔄', title: 'Besoins Superflus', description: 'Création de besoins inutiles' },
    { icon: '💰', title: 'Coûts R&D', description: 'Investissements importants' },
    { icon: '🎯', title: 'Adaptation', description: 'Suivre les tendances éphémères' },
  ];

  return (
    <div className="w-full h-full bg-gradient-to-br from-slate-900 to-slate-800 flex flex-col px-16 py-12 justify-center">
      <h1 className="text-5xl font-bold text-white mb-12 text-center">
        Risques et Défis
      </h1>

      <div className="grid grid-cols-2 gap-8">
        {risks.map((risk, index) => (
          <div
            key={index}
            className="group p-8 bg-gradient-to-br from-red-500/10 to-orange-500/10 rounded-2xl border border-red-500/30 hover:border-red-500/60 hover:bg-red-500/20 transition-all"
          >
            <div className="text-5xl mb-4 group-hover:scale-125 transition-transform">{risk.icon}</div>
            <h3 className="text-2xl font-bold text-white mb-2">{risk.title}</h3>
            <p className="text-red-100">{risk.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
