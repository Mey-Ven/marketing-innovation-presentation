export default function Slide8() {
  const technologies = [
    { icon: '🤖', title: 'IA Hyperpersonnalisation', description: 'IA pour hyperpersonnalisation' },
    { icon: '🥽', title: 'AR/VR', description: 'Expériences immersives' },
    { icon: '🛣️', title: 'Omnicanal', description: 'Parcours omnicanal' },
    { icon: '📊', title: 'Données', description: 'Anticipation grâce aux données' },
  ];

  return (
    <div className="w-full h-full bg-gradient-to-br from-white to-slate-50 flex flex-col px-16 py-12 justify-center">
      <h1 className="text-5xl font-bold text-slate-900 mb-12 text-center">
        Innovation Numérique et IA
      </h1>

      <div className="grid grid-cols-2 gap-8">
        {technologies.map((tech, index) => (
          <div
            key={index}
            className="group p-8 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl border border-blue-100 hover:shadow-2xl hover:scale-105 transition-all cursor-pointer"
          >
            <div className="text-5xl mb-4 group-hover:scale-125 transition-transform">{tech.icon}</div>
            <h3 className="text-2xl font-bold text-slate-900 mb-2">{tech.title}</h3>
            <p className="text-slate-600 group-hover:text-slate-900 transition-colors">{tech.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
