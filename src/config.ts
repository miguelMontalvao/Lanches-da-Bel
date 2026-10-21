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
  heroImage: '/images/hero.jpg',
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
  { value: '+10', unit: 'anos', label: 'de tradição em lanches no bairro' },
  { value: '+100', unit: 'lanches/dia', label: 'saindo quentinhos da chapa' },
  { value: 'Super', unit: 'Restaurante', label: 'selecionado pelo iFood' },
  { value: 'Loja', unit: 'Destaque', label: 'reconhecida pela 99Food' },
]

// Destaques do cardápio — TODO: trocar nomes, descrições e fotos pelos reais.
export const highlights = [
  {
    name: 'X-Tudo da Bel',
    description: 'O campeão da casa: hambúrguer, ovo, bacon, presunto, queijo, salada e muito mais.',
    image: '/images/lanche-1.jpg',
    badge: 'Mais pedido',
  },
  {
    name: 'X-Bacon',
    description: 'Hambúrguer suculento, queijo derretido e bacon crocante no pão macio.',
    image: '/images/lanche-2.jpg',
  },
  {
    name: 'X-Salada',
    description: 'Clássico que nunca erra: hambúrguer, queijo, alface, tomate e maionese da casa.',
    image: '/images/lanche-3.jpg',
  },
  {
    name: 'Cachorro-Quente',
    description: 'Prensado, recheado e caprichado do jeitinho que o bairro ama.',
    image: '/images/lanche-4.jpg',
  },
  {
    name: 'Batata Frita',
    description: 'Sequinha e crocante — perfeita pra acompanhar qualquer lanche.',
    image: '/images/lanche-5.jpg',
  },
  {
    name: 'Combos',
    description: 'Lanche + batata + refri com preço especial. Ideal pra matar a fome de vez.',
    image: '/images/lanche-6.jpg',
    badge: 'Economize',
  },
]

// Perguntas frequentes — TODO: revisar respostas (pagamento, taxa, área).
export const faq = [
  {
    q: 'Vocês entregam no meu endereço?',
    a: 'Entregamos em Senador Camará, Bangu e região. Abra o cardápio digital e informe seu endereço: ele mostra na hora se entregamos e o valor da taxa.',
  },
  {
    q: 'Moro fora da área de entrega. Consigo pedir?',
    a: 'Consegue! Peça pelo iFood ou pela 99Food — os apps fazem a entrega para mais bairros.',
  },
  {
    q: 'Qual a forma mais vantajosa de pedir?',
    a: 'Pelo nosso cardápio digital. O pedido chega direto pra gente, sem intermediários, e você aproveita os melhores preços.',
  },
  {
    q: 'Quais as formas de pagamento?',
    a: 'Aceitamos Pix, cartões de crédito e débito e dinheiro. Você escolhe na finalização do pedido.',
  },
  {
    q: 'Posso retirar no balcão?',
    a: 'Pode sim! Escolha "retirada" no cardápio digital e venha buscar na Rua do Campo, Nº 8.',
  },
]
