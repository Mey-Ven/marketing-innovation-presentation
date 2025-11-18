export default function Slide6() {
  const phases = [
    {
      phase: 'Phase 1',
      title: 'Préparation',
      description: 'Tests, prototypage, validation',
      color: 'from-blue-500 to-blue-600',
    },
    {
      phase: 'Phase 2',
      title: 'Lancement',
      description: 'Déploiement, communication',
      color: 'from-purple-500 to-purple-600',
    },
    {
      phase: 'Phase 3',
      title: 'Croissance',
      description: 'Expansion, fidélisation',
      color: 'from-cyan-500 to-cyan-600',
    },
  ];

  return (
    <div className="w-full h-full bg-gradient-to-br from-white to-slate-50 flex flex-col px-16 py-12 justify-center">
      <h1 className="text-5xl font-bold text-slate-900 mb-12 text-center">
        Stratégies de Lancement
      </h1>

      <div className="flex gap-8 items-center justify-center">
        {phases.map((item, index) => (
          <div key={index} className="flex items-center gap-8">
            <div
              className={`group bg-gradient-to-br ${item.color} p-8 rounded-2xl shadow-lg hover:shadow-2xl hover:scale-110 transition-all duration-300 cursor-pointer text-white w-56`}
            >
              <div className="text-sm font-semibold opacity-90 mb-2">{item.phase}</div>
              <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
              <p className="text-base opacity-85">{item.description}</p>
            </div>
            {index < phases.length - 1 && (
              <div className="text-3xl text-slate-400 font-light">→</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
