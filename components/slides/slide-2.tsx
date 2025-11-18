export default function Slide2() {
  const items = [
    { number: '1', title: 'Définition et Enjeux' },
    { number: '2', title: 'Types d\'Innovation Marketing' },
    { number: '3', title: 'Étude de Marché et Client' },
    { number: '4', title: 'Stratégies de Lancement' },
    { number: '5', title: 'Communication et Branding' },
    { number: '6', title: 'Innovation Numérique et IA' },
    { number: '7', title: 'Cas d\'Étude' },
    { number: '8', title: 'Conclusion et Perspectives' },
  ];

  return (
    <div className="w-full h-full bg-gradient-to-br from-white to-slate-50 flex flex-col px-16 py-12">
      <h1 className="text-5xl font-bold text-slate-900 mb-12 text-center">
        Table des Matières
      </h1>

      <div className="grid grid-cols-2 gap-8 flex-1">
        {items.map((item) => (
          <div
            key={item.number}
            className="group flex items-center gap-6 p-6 rounded-xl bg-white shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer border border-slate-100"
          >
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-2xl font-bold flex-shrink-0 group-hover:shadow-lg">
              {item.number}
            </div>
            <h3 className="text-lg font-semibold text-slate-800 group-hover:text-blue-600 transition-colors">
              {item.title}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
}
