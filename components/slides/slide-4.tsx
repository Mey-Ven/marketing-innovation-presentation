export default function Slide4() {
  const innovations = [
    {
      title: 'Innovation Produit',
      description: 'Nouveaux produits/services',
      icon: '📦',
      color: 'from-blue-500 to-blue-600',
    },
    {
      title: 'Innovation Processus',
      description: 'Amélioration production/distribution',
      icon: '⚙️',
      color: 'from-purple-500 to-purple-600',
    },
    {
      title: 'Innovation Stratégique',
      description: 'Nouveaux business models',
      icon: '🎯',
      color: 'from-cyan-500 to-cyan-600',
    },
  ];

  return (
    <div className="w-full h-full bg-gradient-to-br from-white to-slate-50 flex flex-col px-16 py-12 justify-center">
      <h1 className="text-5xl font-bold text-slate-900 mb-12 text-center">
        Types d'Innovation Marketing
      </h1>

      <div className="grid grid-cols-3 gap-8">
        {innovations.map((item, index) => (
          <div
            key={index}
            className={`group bg-gradient-to-br ${item.color} p-8 rounded-2xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer text-white`}
          >
            <div className="text-5xl mb-4">{item.icon}</div>
            <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
            <p className="text-lg opacity-90">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
