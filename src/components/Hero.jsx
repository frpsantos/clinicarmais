import React from "react";

export default function Hero() {
  return (
    <section id="inicio" className="w-full">
      <div className="w-full bg-gradient-to-br from-oliva-100 to-white">
        <div className="max-w-6xl mx-auto px-4 py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight">
              R+ | Clínica
            </h1>
            <p className="mt-4 text-lg text-slate-700">
              Acolhimento, ciência e prática para impulsionar o desenvolvimento humano.
            </p>
            <p className="mt-2 text-slate-600">
              Intervenções personalizadas com foco em autonomia, qualidade de vida e integração social.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <a href="#contato" className="px-5 py-3 rounded-xl bg-oliva-600 text-white hover:bg-oliva-700 transition">Fale com a R+</a>
              <a href="#servicos" className="px-5 py-3 rounded-xl border border-slate-300 text-slate-700 hover:border-oliva-500 transition">Nossos serviços</a>
            </div>
          </div>
            <div className="rounded-2xl h-64 md:h-80 w-full overflow-hidden shadow-soft">
            <img
              src="/hero-rmais.jpg"
              alt="Equipe da R+ Clínica"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
