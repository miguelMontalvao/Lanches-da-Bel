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

Tudo fica em **`src/config.ts`** — links, WhatsApp, endereço, horário, cardápio em destaque (`menu` e `categories`), FAQ e crédito do rodapé (`credits`).

Para o crédito "Produzido por" aparecer sem link, deixe `credits.url` vazio.

Pendências (marcadas com `TODO` no arquivo):

- [ ] Link direto da loja no **iFood** (`ifoodUrl`)
- [ ] Link direto da loja na **99Food** (`food99Url`)
- [ ] **Horário** de funcionamento real (`hours`)
- [ ] Nomes/descrições reais dos **itens do cardápio** (`menu`)
- [ ] Revisar respostas do **FAQ** (pagamento, área de entrega, retirada)

## Fotos

Coloque os arquivos em `public/images/` com estes nomes (enquanto não existirem, o site mostra uma arte provisória):

| Arquivo | Uso | Tamanho sugerido |
|---|---|---|
| `logo.png` | Cabeçalho e rodapé (fundo transparente) | 400×400 |
| `hero.png` | Lanche sem fundo no topo da página | 1200×1200, PNG transparente |
| `hero.jpg` | Prévia do link no WhatsApp/redes (og:image) | 1200×630 |
| `lanche-1.jpg` … `lanche-4.jpg` | Cards de destaque | 800×800 |

Dica: comprima as fotos em https://squoosh.app antes de subir (ideal < 200 KB cada).

## Design

- Paleta e fontes definidas em `src/index.css` (`@theme`): base grafite/carvão, rosa da marca para ações, mostarda para detalhes.
- Títulos em Bebas Neue, textos em Barlow.
- Animações de entrada discretas via atributo `data-reveal` (`src/lib/reveal.ts`), desligadas automaticamente para quem prefere movimento reduzido.

## Métricas de conversão

Todo clique importante dispara um evento (`clique_pedido_brendi`, `clique_app_parceiro`, `clique_whatsapp`, `clique_como_chegar`).
Basta colar o script do Google Analytics 4 / Tag Manager ou Meta Pixel no `index.html` que os eventos passam a ser registrados.

## Deploy na Vercel

1. Em https://vercel.com, clique em **Add New → Project** e importe este repositório.
2. A Vercel detecta Vite automaticamente (build `npm run build`, saída `dist`). Clique em **Deploy**.
3. Para usar domínio próprio: **Settings → Domains**.
