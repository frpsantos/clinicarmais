import React from "react";

const cards = [
  { title: "Avaliação e Plano Individual", text: "Mapeamento de habilidades, necessidades e definição de metas.", icon: "🗂️" },
  { title: "Atendimento ABA", text: "Intervenções estruturadas com reforço positivo.", icon: "🧩" },
  { title: "Terapia Ocupacional", text: "Autonomia nas AVDs, integração sensorial e rotina.", icon: "👐" },
  { title: "Fonoaudiologia", text: "Comunicação funcional e linguagem.", icon: "🗣️" },
  { title: "Psicologia", text: "Suporte emocional, social e familiar.", icon: "🧠" },
  { title: "Grupos e Vivências", text: "Práticas sociais, artes e atividades integrativas.", icon: "🎨" },
];

export default function Services() {
  return (
    <section id="servicos" className="w-full">
      <div className="w-full bg-oliva-50">
        <div className="max-w-6xl mx-auto px-4 py-16 md:py-24">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Serviços</h2>
          <p className="mt-3 text-slate-700 max-w-2xl">
            Atendimento multidisciplinar com foco em objetivos claros, acompanhamento contínuo e participação da família.
          </p>
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {cards.map((c) => (
              <div key={c.title} className="rounded-2xl border bg-white p-6 shadow-soft hover:shadow-md transition">
                <div className="text-3xl">{c.icon}</div>
                <h3 className="mt-3 text-xl font-semibold text-slate-900">{c.title}</h3>
                <p className="mt-2 text-slate-600">{c.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
