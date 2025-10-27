import React, { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);
  const nav = [
    { name: "Início", href: "#inicio" },
    { name: "Sobre", href: "#sobre" },
    { name: "Serviços", href: "#servicos" },
    { name: "Equipe", href: "#equipe" },
    { name: "Contato", href: "#contato" },
  ];
  return (
    <header className="w-full sticky top-0 z-50 bg-white/90 backdrop-blur border-b">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <a href="#inicio" className="flex items-center gap-2">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-oliva-600 text-white font-bold">R+</span>
          <span className="font-semibold text-slate-800">Clínica</span>
        </a>
        <nav className="hidden md:flex items-center gap-6">
          {nav.map((item) => (
            <a key={item.name} href={item.href} className="text-slate-600 hover:text-oliva-700 transition">
              {item.name}
            </a>
          ))}
          <a href="#contato" className="px-4 py-2 rounded-xl bg-oliva-600 text-white hover:bg-oliva-700 transition">
            Agendar
          </a>
        </nav>
        <button className="md:hidden p-2" onClick={() => setOpen(!open)} aria-label="Abrir menu">
          <svg width="24" height="24" fill="none" stroke="currentColor"><path d="M4 6h16M4 12h16M4 18h16"/></svg>
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t bg-white">
          <div className="px-4 py-3 flex flex-col gap-3">
            {nav.map((item) => (
              <a key={item.name} href={item.href} className="text-slate-700" onClick={()=>setOpen(false)}>
                {item.name}
              </a>
            ))}
            <a href="#contato" className="px-4 py-2 rounded-xl bg-oliva-600 text-white w-fit" onClick={()=>setOpen(false)}>
              Agendar
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
