# Lanches da Bel — Landing Page

Landing page de conversão da Lanches da Bel (Senador Camará – Bangu/RJ).
React + TypeScript + Vite + Tailwind CSS v4.

## Rodar localmente

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # gera /dist
```

## Onde editar o conteúdo

Tudo fica em **`src/config.ts`** — links, WhatsApp, endereço, horário, destaques do cardápio e FAQ.

Pendências (marcadas com `TODO` no arquivo):

- [ ] Link direto da loja no **iFood** (`ifoodUrl`)
- [ ] Link direto da loja na **99Food** (`food99Url`)
- [ ] **Horário** de funcionamento real (`hours`)
- [ ] Nomes/descrições reais dos **destaques do cardápio** (`highlights`)
- [ ] Revisar respostas do **FAQ** (pagamento, área de entrega, retirada)

## Fotos

Coloque os arquivos em `public/images/` com estes nomes (enquanto não existirem, o site mostra uma arte provisória):

| Arquivo | Uso | Tamanho sugerido |
|---|---|---|
| `logo.png` | Cabeçalho e rodapé (fundo transparente) | 400px de altura |
| `hero.jpg` | Foto grande do topo + prévia no WhatsApp | 1200×1200 |
| `lanche-1.jpg` … `lanche-4.jpg` | Cards de destaque | 800×800 |

Dica: comprima as fotos em https://squoosh.app antes de subir (ideal < 200 KB cada).

## Métricas de conversão

Todo clique importante dispara um evento (`clique_pedido_brendi`, `clique_app_parceiro`, `clique_whatsapp`, `clique_como_chegar`).
Basta colar o script do Google Analytics 4 / Tag Manager ou Meta Pixel no `index.html` que os eventos passam a ser registrados.

## Deploy na Vercel

1. Em https://vercel.com, clique em **Add New → Project** e importe este repositório.
2. A Vercel detecta Vite automaticamente (build `npm run build`, saída `dist`). Clique em **Deploy**.
3. Para usar domínio próprio: **Settings → Domains**.
