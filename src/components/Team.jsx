import React from "react";

const people = [
  { name: "Elisa", role: "Coordenação Clínica", img: "/equipe1.jpg" },
  { name: "Arlene", role: "Terapia Ocupacional", img: "/equipe2.jpg" },
  { name: "Roberta", role: "Psicologia", img: "/equipe3.jpg" },
];

export default function Team() {
  return (
    <section id="equipe" className="w-full">
      <div className="w-full bg-white">
        <div className="max-w-6xl mx-auto px-4 py-16 md:py-24">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Nossa equipe</h2>
          <p className="mt-3 text-slate-700 max-w-2xl">
            Profissionais com experiência prática e formação contínua, alinhados à ética, empatia e resultados.
          </p>
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {people.map((p) => (
              <div key={p.name} className="rounded-2xl border bg-white p-5 text-center shadow-soft">
               <div
                  className={`h-44 w-full rounded-xl bg-slate-100 bg-[url('${p.img}')] bg-cover bg-center`}
                ></div>
                <h3 className="mt-4 text-lg font-semibold text-slate-900">{p.name}</h3>
                <p className="text-slate-600">{p.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
