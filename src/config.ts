// =====================================================================
// CONFIGURAÇÃO DO SITE — edite tudo por aqui, sem mexer nos componentes.
// Itens marcados com "TODO" ainda precisam dos dados reais.
// =====================================================================

export const site = {
  name: 'Lanches da Bel',
  tagline: 'O lanche mais querido de Senador Camará',

  // Pedido principal (entrega própria)
  brendiUrl: 'https://menu.brendi.com.br/lanches-da-bel-bangu',

  // Pedido secundário (fora da área de entrega)
  // TODO: trocar pelos links diretos da loja em cada app.
  ifoodUrl: 'https://www.ifood.com.br/busca?q=lanches%20da%20bel',
  food99Url: 'https://food.99app.com/',

  whatsapp: {
    number: '5521965448151',
    display: '(21) 96544-8151',
    message: 'Olá! Vim pelo site e gostaria de fazer um pedido 😊',
  },

  address: {
    street: 'Rua do Campo, Nº 8',
    neighborhood: 'Senador Camará',
    region: 'Bangu',
    city: 'Rio de Janeiro',
    state: 'RJ',
  },

  // Fotos: coloque os arquivos em /public/images com estes nomes.
  // Enquanto o arquivo não existir, o site mostra uma arte provisória.
  logo: '/images/logo.png',
  heroImage: '/images/hero.png',

  // Crédito no rodapé. Deixe url vazia ('') para exibir só o nome, sem link.
  credits: {
    name: 'Atylus Soluções Digitais',
    url: 'https://atylus.com.br',
  },
}

export const mapsQuery = `${site.address.street.replace('Nº ', '')}, ${site.address.neighborhood}, ${site.address.city} - ${site.address.state}`
export const mapsEmbedUrl = `https://www.google.com/maps?q=${encodeURIComponent(mapsQuery)}&output=embed`
export const mapsDirectionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(mapsQuery)}`
export const whatsappUrl = (message = site.whatsapp.message) =>
  `https://wa.me/${site.whatsapp.number}?text=${encodeURIComponent(message)}`

// Horário de funcionamento (horário de Brasília).
// day: 0 = domingo ... 6 = sábado. Use null para dia fechado.
// Se o fechamento for depois da meia-noite, use por ex. close: '01:00'.
// TODO: confirmar horários reais.
export const hours: { day: number; label: string; open: string | null; close: string | null }[] = [
  { day: 1, label: 'Segunda', open: null, close: null },
  { day: 2, label: 'Terça', open: '18:00', close: '23:30' },
  { day: 3, label: 'Quarta', open: '18:00', close: '23:30' },
  { day: 4, label: 'Quinta', open: '18:00', close: '23:30' },
  { day: 5, label: 'Sexta', open: '18:00', close: '00:30' },
  { day: 6, label: 'Sábado', open: '18:00', close: '00:30' },
  { day: 0, label: 'Domingo', open: '18:00', close: '23:30' },
]

export const proof = [
  { title: '+10 anos', label: 'de tradição com lanches' },
  { title: '+100 lanches', label: 'vendidos por dia' },
  { title: 'Super Restaurante', label: 'selecionado no iFood' },
  { title: 'Loja Destaque', label: 'na 99Food' },
]

// Cardápio em destaque — só itens com foto real enviada pela loja.
// O cardápio completo, com preços, fica no Brendi.
// TODO: confirmar nomes e descrições com a loja.
export const categories = ['Hambúrgueres', 'Sanduíches', 'Combos'] as const
export type Category = (typeof categories)[number]

export const menu: { name: string; category: Category; description: string; image: string }[] = [
  {
    name: 'X-Tudo da Bel',
    category: 'Hambúrgueres',
    description: 'Dois hambúrgueres, ovo, presunto e queijo derretido em camadas.',
    image: '/images/lanche-1.jpg',
  },
  {
    name: 'X-Egg Salada',
    category: 'Hambúrgueres',
    description: 'Hambúrguer, ovo, queijo, alface e tomate no pão com gergelim.',
    image: '/images/lanche-3.jpg',
  },
  {
    name: 'Mega 30cm',
    category: 'Sanduíches',
    description: 'Sanduíche de 30cm com ovos de codorna, azeitona e queijo ralado.',
    image: '/images/lanche-2.jpg',
  },
  {
    name: 'Combo da Bel',
    category: 'Combos',
    description: 'Batata com cheddar e bacon, anéis de cebola e lanches na mesma caixa.',
    image: '/images/lanche-4.jpg',
  },
]

// Perguntas frequentes — TODO: revisar com a loja (pagamento, retirada, área).
export const faq = [
  {
    q: 'Vocês entregam no meu endereço?',
    a: 'Entregamos em Senador Camará, Bangu e região. Abra o cardápio digital e informe seu endereço: ele mostra na hora se entregamos e o valor da taxa.',
  },
  {
    q: 'Moro fora da área de entrega. Consigo pedir?',
    a: 'Consegue. Peça pelo iFood ou pela 99Food: os apps entregam para mais bairros.',
  },
  {
    q: 'Por que pedir pelo cardápio digital?',
    a: 'O pedido chega direto na nossa cozinha, sem intermediário. Você vê o cardápio completo com fotos e preços e acompanha tudo pelo celular.',
  },
  {
    q: 'Quais as formas de pagamento?',
    a: 'As formas de pagamento disponíveis aparecem na finalização do pedido, no cardápio digital. Dúvidas? Chame a gente no WhatsApp.',
  },
  {
    q: 'Posso retirar no balcão?',
    a: 'Confira a opção de retirada ao finalizar o pedido no cardápio digital, ou fale com a gente no WhatsApp. Estamos na Rua do Campo, Nº 8.',
  },
]
