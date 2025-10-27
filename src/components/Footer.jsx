import React from "react";

export default function Footer() {
  return (
    <footer className="w-full bg-white border-t">
      <div className="max-w-6xl mx-auto px-4 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-oliva-600 text-white font-bold">R+</span>
          <span className="text-slate-600">www.clinicamais.com.br</span>
        </div>
        <p className="text-slate-500 text-sm">© {new Date().getFullYear()} R+ | Mais Clínica — Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}
