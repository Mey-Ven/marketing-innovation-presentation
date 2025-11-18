export default function Slide7() {
  const items = [
    { icon: '🎨', title: 'Identité de Marque', description: 'Construire une identité distinctive' },
    { icon: '📢', title: 'Campagnes', description: 'Campagnes innovantes' },
    { icon: '📱', title: 'Canaux Digitaux', description: 'Canaux digitaux & réseaux sociaux' },
    { icon: '⚡', title: 'Buzz', description: 'Générer du buzz' },
  ];

  return (
    <div className="w-full h-full bg-gradient-to-br from-slate-900 to-slate-800 flex flex-col px-16 py-12 justify-center">
      <h1 className="text-5xl font-bold text-white mb-12 text-center">
        Communication et Branding
      </h1>

      <div className="grid grid-cols-2 gap-8">
        {items.map((item, index) => (
          <div
            key={index}
            className="group p-8 bg-gradient-to-br from-white/5 to-white/0 rounded-2xl border border-white/10 hover:border-white/30 hover:bg-white/10 transition-all cursor-pointer"
          >
            <div className="text-5xl mb-4 group-hover:scale-125 transition-transform">{item.icon}</div>
            <h3 className="text-2xl font-bold text-white mb-2">{item.title}</h3>
            <p className="text-white/70 group-hover:text-white transition-colors">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
