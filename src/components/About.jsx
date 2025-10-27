import React from "react";

export default function About() {
  return (
    <section id="sobre" className="w-full">
      <div className="w-full bg-white">
        <div className="max-w-6xl mx-auto px-4 py-16 md:py-24 grid md:grid-cols-2 gap-12 items-center">
          <div className="rounded-2xl h-64 md:h-80 w-full overflow-hidden shadow-soft">
          <img
            src="/about.jpg"
            alt="Ambiente acolhedor da R+ Clínica"
            className="w-full h-full object-cover"
          />
        </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Reforço Positivo na prática</h2>
            <p className="mt-4 text-slate-700">
              Unimos abordagem baseada em evidências a um ambiente acolhedor, leve e humano. O reforço positivo guia
              nossos processos para construir autonomia, habilidades socioemocionais e bem-estar.
            </p>
            <ul className="mt-6 grid gap-3 text-slate-700">
              <li>• Planos individuais de intervenção</li>
              <li>• Comunicação transparente com famílias e cuidadores</li>
              <li>• Trabalho multidisciplinar e rotinas funcionais</li>
              <li>• Acompanhamento com metas claras e mensuráveis</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
