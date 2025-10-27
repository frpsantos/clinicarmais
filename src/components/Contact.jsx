import React, { useState } from "react";

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ ok: false, error: "", sent: false });

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setStatus({ ok: false, error: "", sent: false });

    const data = Object.fromEntries(new FormData(e.currentTarget));

    try {
      const res = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
      const json = await res.json();
      if (json.ok) setStatus({ ok: true, error: "", sent: true });
      else setStatus({ ok: false, error: json.error || "Erro ao enviar", sent: false });
    } catch (err) {
      setStatus({ ok: false, error: err.message, sent: false });
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="contato" className="w-full">
      <div className="w-full bg-oliva-50">
        <div className="max-w-6xl mx-auto px-4 py-16 md:py-24 grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Agende um contato</h2>
            <p className="mt-3 text-slate-700">
              Preencha seus dados e retornaremos para alinhar a melhor forma de atendimento.
            </p>
            <form onSubmit={handleSubmit} className="mt-6 grid grid-cols-1 gap-4">
              <input required name="nome" placeholder="Seu nome" className="px-4 py-3 rounded-xl border outline-none focus:ring-2 focus:ring-oliva-300" />
              <input required type="email" name="email" placeholder="Seu e-mail" className="px-4 py-3 rounded-xl border outline-none focus:ring-2 focus:ring-oliva-300" />
              <input name="whatsapp" placeholder="WhatsApp (com DDD)" className="px-4 py-3 rounded-xl border outline-none focus:ring-2 focus:ring-oliva-300" />
              <textarea name="mensagem" rows="4" placeholder="Como podemos ajudar?" className="px-4 py-3 rounded-xl border outline-none focus:ring-2 focus:ring-oliva-300"></textarea>
              <button disabled={loading} className="px-5 py-3 rounded-xl bg-oliva-600 text-white hover:bg-oliva-700 transition disabled:opacity-60">
                {loading ? "Enviando..." : "Enviar"}
              </button>
              {status.sent && <p className="text-oliva-700">Mensagem enviada com sucesso! Em breve entraremos em contato.</p>}
              {status.error && <p className="text-red-600">Erro: {status.error}</p>}
            </form>
          </div>
          <div>
            <div className="rounded-2xl overflow-hidden shadow-soft">
              <iframe
                title="Mapa"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31109.394!2d-34.871!3d-7.115!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0:0x0!2sJo%C3%A3o%20Pessoa!5e0!3m2!1spt-BR!2sBR!4v1700000000000"
                width="100%"
                height="340"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div className="mt-4 p-4 rounded-xl border bg-white">
              <p className="text-slate-700"><strong>Domínio:</strong> www.clinicamais.com.br</p>
              <p className="text-slate-700"><strong>E-mail:</strong> atendimento@clinicamais.com.br</p>
              <p className="text-slate-700"><strong>WhatsApp:</strong> (xx) xxxxx-xxxx</p>
            </div>
          </div>
        </div>
      </div>
      {/* Botão flutuante WhatsApp */}
      <a
        href="https://wa.me/5500000000000"
        className="fixed bottom-5 right-5 md:bottom-8 md:right-8 inline-flex items-center justify-center w-14 h-14 rounded-full bg-oliva-600 text-white shadow-soft hover:bg-oliva-700"
        aria-label="WhatsApp"
        target="_blank" rel="noreferrer"
      >
        <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor"><path d="M20.52 3.48A11.87 11.87 0 0012 0C5.37 0 0 5.37 0 12c0 2.11.55 4.16 1.6 5.98L0 24l6.2-1.62A11.9 11.9 0 0012 24c6.63 0 12-5.37 12-12 0-3.19-1.24-6.19-3.48-8.52zM12 22a9.9 9.9 0 01-5.06-1.39l-.36-.21-3.69.96.99-3.6-.23-.37A9.95 9.95 0 1122 12c0 5.52-4.48 10-10 10zm5.27-7.55c-.29-.14-1.7-.84-1.96-.94-.26-.09-.45-.14-.64.14-.19.29-.74.95-.9 1.14-.17.19-.33.21-.62.07-.29-.14-1.23-.45-2.34-1.43-.86-.76-1.44-1.7-1.61-1.99-.17-.29-.02-.45.12-.59.12-.12.29-.31.43-.48.14-.17.19-.29.29-.48.1-.19.05-.36-.02-.5-.07-.14-.64-1.55-.88-2.13-.23-.55-.47-.48-.64-.49l-.55-.01c-.19 0-.5.07-.76.36s-1 1-1 2.43 1.03 2.82 1.18 3.01c.14.19 2.03 3.09 4.93 4.33.69.3 1.23.48 1.65.61.69.22 1.31.19 1.8.12.55-.08 1.7-.7 1.94-1.38.24-.67.24-1.25.17-1.38-.07-.13-.26-.21-.55-.35z"/></svg>
      </a>
    </section>
  );
}
