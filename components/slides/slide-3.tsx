export default function Slide3() {
  const keyPoints = [
    'Suivre les tendances du marché et de la société',
    'Proposer de nouvelles solutions avant la concurrence',
    'Générer un avantage compétitif durable',
    'Occuper le terrain de la communication',
  ];

  return (
    <div className="w-full h-full bg-gradient-to-br from-slate-50 to-white flex flex-col px-16 py-12 justify-center">
      <div className="max-w-4xl">
        <div className="inline-block mb-6">
          <span className="text-sm font-semibold text-blue-600 uppercase tracking-widest">
            Slide 3
          </span>
        </div>

        <h1 className="text-5xl font-bold text-slate-900 mb-6">
          Définition et Enjeux
        </h1>

        <p className="text-xl text-slate-600 mb-12 leading-relaxed">
          Le marketing d'innovation crée une culture centrée sur le client avec des stratégies adaptatives.
        </p>

        <div className="space-y-4">
          {keyPoints.map((point, index) => (
            <div
              key={index}
              className="flex gap-4 p-4 rounded-lg bg-blue-50 border-l-4 border-blue-500 hover:bg-blue-100 transition-colors"
            >
              <div className="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center flex-shrink-0 text-sm font-bold">
                ✓
              </div>
              <p className="text-lg text-slate-700">{point}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
