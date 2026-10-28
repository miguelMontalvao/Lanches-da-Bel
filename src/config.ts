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
  ifoodUrl: 'https://www.ifood.com.br/delivery/rio-de-janeiro-rj/lanches-da-bel-bangu/186ab393-07ff-443d-b83e-bce2f2ced62e',
  food99Url: 'https://oia.99app.com/dlp9/aJK5Wi',

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


  // Crédito no rodapé. Deixe url vazia ('') para exibir só o nome, sem link.
  credits: {
    name: 'Atylus Soluções Digitais',
    url: 'https://atylus.com.br',
  },
}

// Carrossel do topo. Cada foto existe em /public/images/carrossel como PNG transparente
// (reserva) e WebP em 3 tamanhos: {file}-480.webp, {file}-640.webp e {file}.webp (900px).
// width/height = tamanho real da versão de 900px (evita a página "pular").
// A primeira é a que aparece ao abrir o site (e é pré-carregada no index.html).
export const heroSlides = [
  { file: 'mega30', width: 900, height: 671, alt: 'Mega Hot Dog de 30cm: dois cachorros-quentes com calabresa, ovo de codorna, azeitona, milho e ervilha' },
  { file: 'queijo-coalho', width: 900, height: 873, alt: 'Hambúrguer com queijo coalho grelhado, bacon, cheddar e alface' },
  { file: 'combo-kids', width: 900, height: 823, alt: 'Combo Kids: hambúrguer, batata frita, refrigerante Guaracamp e bala Fini' },
  { file: 'polenguinho', width: 894, height: 900, alt: 'Hambúrguer com bacon, calabresa, presunto, queijo, tomate, alface e batata palha' },
  { file: 'montanha', width: 669, height: 900, alt: 'X-Montanha: três hambúrgueres com ovo, queijo coalho e presunto' },
]

export const mapsQuery = `${site.address.street.replace('Nº ', '')}, ${site.address.neighborhood}, ${site.address.city} - ${site.address.state}`
export const mapsEmbedUrl = `https://www.google.com/maps?q=${encodeURIComponent(mapsQuery)}&output=embed`
export const mapsDirectionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(mapsQuery)}`
export const whatsappUrl = (message = site.whatsapp.message) =>
  `https://wa.me/${site.whatsapp.number}?text=${encodeURIComponent(message)}`

// Horário de funcionamento (horário de Brasília).
// day: 0 = domingo ... 6 = sábado. Use null para dia fechado.
// Se o fechamento for depois da meia-noite, use por ex. close: '05:00'.
export const hours: { day: number; label: string; open: string | null; close: string | null }[] = [
  { day: 1, label: 'Segunda', open: '18:30', close: '05:00' },
  { day: 2, label: 'Terça', open: '18:30', close: '05:00' },
  { day: 3, label: 'Quarta', open: '18:30', close: '05:00' },
  { day: 4, label: 'Quinta', open: '18:30', close: '05:00' },
  { day: 5, label: 'Sexta', open: '18:30', close: '05:00' },
  { day: 6, label: 'Sábado', open: '18:30', close: '05:00' },
  { day: 0, label: 'Domingo', open: '18:30', close: '05:00' },
]

export const proof = [
  { title: '+100 lanches', label: 'vendidos por dia' },
  { title: 'Super Restaurante', label: 'selecionado no iFood' },
  { title: 'Loja Destaque', label: 'na 99Food' },
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
