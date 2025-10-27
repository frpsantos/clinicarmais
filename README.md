# R+ | Mais Clínica (maisclinica)

Site institucional em React + Vite + Tailwind, com função serverless de envio de e-mail via Zoho (Nodemailer).

## Requisitos
- Node 18+
- Conta Zoho Mail (usuário e App Password)
- Vercel (recomendado para deploy)

## Instalação
```bash
npm install
npm run dev
```

Acesse http://localhost:5173

## Variáveis de ambiente
Copie `.env.example` para `.env` (para uso local) **ou** defina no painel da Vercel como variáveis do projeto:
- `ZOHO_USER` — e-mail Zoho (ex.: atendimento@clinicamais.com.br)
- `ZOHO_PASS` — senha/app password do Zoho

> **Atenção:** Não commit suas credenciais.

## Envio de e-mail
A função serverless está em `api/send-email.js` e recebe POST em `/api/send-email` com:
```json
{ "nome": "...", "email": "...", "whatsapp": "...", "mensagem": "..." }
```

## Deploy (Vercel)
1. Faça login em https://vercel.com e crie um novo projeto importando esta pasta
2. Defina as variáveis de ambiente `ZOHO_USER` e `ZOHO_PASS`
3. Deploy

## Personalização
- Paleta principal: `oliva` e detalhes em `madeira` (config em `tailwind.config.js`)
- Imagens placeholders em `/public`:
  - `hero-bg.jpg`
  - `about-textura-madeira.jpg`
  - `equipe1.jpg`, `equipe2.jpg`, `equipe3.jpg`
- Título e favicon: `index.html` e `/public/favicon.svg`

## Domínio
Rodapé e contato usam `www.clinicamais.com.br`.
