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

Tudo fica em **`src/config.ts`** — links, WhatsApp, endereço, horário, frases do letreiro (`marquee`), FAQ e crédito do rodapé (`credits`).

Para o crédito "Produzido por" aparecer sem link, deixe `credits.url` vazio.

Pendências (marcadas com `TODO` no arquivo):

- [ ] Fotos e nomes dos lanches para a **galeria de fotos**
- [ ] Revisar respostas do **FAQ** (pagamento, área de entrega, retirada)

## Fotos

Coloque os arquivos em `public/images/` com estes nomes (enquanto não existirem, o site mostra uma arte provisória):

| Arquivo | Uso | Tamanho sugerido |
|---|---|---|
| `logo.png` | Cabeçalho e rodapé (fundo transparente) | 400×400 |
| `carrossel/{nome}.png` + `{nome}.webp`, `{nome}-640.webp`, `{nome}-480.webp` | Lanches sem fundo do carrossel do topo (lista em `heroSlides`) | 900px no lado maior, fundo transparente |
| `og-image.jpg` | Prévia do link no WhatsApp/redes (og:image) | 1200×630 |
| `lanche-4.jpg` + `lanche-4.webp` | Foto da seção "Como pedir" | 800×800 |

Para trocar as fotos do carrossel, coloque em `public/images/carrossel/` o PNG sem fundo e as versões WebP de 900, 640 e 480px com o mesmo nome, e ajuste a lista `heroSlides` em `src/config.ts` (com largura e altura da versão de 900px). Use `steam: true` para mostrar vapor subindo do lanche.

Dica: comprima as fotos em https://squoosh.app antes de subir (ideal < 200 KB cada).

## Design

- Paleta e fontes definidas em `src/index.css` (`@theme`): base grafite/carvão, rosa da marca para ações (pedir), turquesa (complementar dividida do rosa) para informação e navegação, mostarda para selos e detalhes.
- Títulos em Bebas Neue, textos em Barlow.
- Animações de entrada discretas via atributo `data-reveal` (`src/lib/reveal.ts`), desligadas automaticamente para quem prefere movimento reduzido.
- Neon no título: "Senador Camará." acende em rosa neon (pisca ao ligar e depois "respira") quando a loja está aberta, e fica como tubo apagado quando está fechada, com o aviso da próxima abertura (`nextOpening` em `src/lib/hours.ts`).
- Letreiro rolando abaixo do topo (`src/components/Marquee.tsx`), selo girando "Feito na hora • Direto da chapa" e vapor nos hambúrgueres (`src/components/HeroCarousel.tsx`). Com movimento reduzido, tudo fica parado.

## Música de fundo

- Arquivo: `public/audio/jingle-lanches-da-bel.mp3` (MP3 96 kbps). Para trocar, substitua o arquivo mantendo o nome ou ajuste `SRC` em `src/components/MusicPlayer.tsx`.
- Só é baixada depois que a página termina de carregar; começa no primeiro toque/clique (os navegadores bloqueiam som automático), em loop e com volume inicial de 25%.
- Botão redondo (tocar/pausar, com equalizador enquanto toca) e um botão de volume que abre um painel. No celular fica no canto do cabeçalho; no computador, no canto inferior esquerdo, sem cobrir o conteúdo. A escolha do visitante (pausado e volume) fica salva no navegador dele.

## Métricas de conversão

Todo clique importante dispara um evento (`clique_pedido_brendi`, `clique_app_parceiro`, `clique_whatsapp`, `clique_como_chegar`).
Basta colar o script do Google Analytics 4 / Tag Manager ou Meta Pixel no `index.html` que os eventos passam a ser registrados.

## Deploy na Vercel

1. Em https://vercel.com, clique em **Add New → Project** e importe este repositório.
2. A Vercel detecta Vite automaticamente (build `npm run build`, saída `dist`). Clique em **Deploy**.
3. Para usar domínio próprio: **Settings → Domains**.
