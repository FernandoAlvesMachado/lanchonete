const lanchoneteItens = [
  {
    img: 'https://media-cldnry.s-nbcnews.com/image/upload/t_fit-1240w,f_auto,q_auto:best/newscms/2019_21/2870431/190524-classic-american-cheeseburger-ew-207p.jpg',
    nome: 'Hambúrguer',
    preco: 12.99,
    descricao: 'Delicioso hambúrguer com carne suculenta.',
  },
  {
    img: 'https://cdn.casaeculinaria.com/wp-content/uploads/2023/03/13101208/Batata-frita.jpg',
    nome: 'Batata Frita',
    preco: 4.99,
    descricao: 'Porção generosa de batatas fritas crocantes.',
  },
  {
    img: 'https://doutorjairo.uol.com.br/media/_versions/istock-refrigerante_widelg.jpg',
    nome: 'Refrigerante',
    preco: 2.99,
    descricao: 'Bebida refrigerante com várias opções de sabores.',
  },
  {
    img: 'https://assets.unileversolutions.com/recipes-v2/106678.jpg?imwidth=800',
    nome: 'Sanduíche de Frango',
    preco: 8.99,
    descricao: 'Sanduíche de frango grelhado com molho especial.',
  },
  {
    img: 'https://redesupermarket.com.br/wp-content/uploads/2022/09/1.-Cachorro-Quente-Prensado-Banner-888x444-1.jpg',
    nome: 'Cachorro-Quente',
    preco: 5.99,
    descricao: 'Cachorro-quente com salsicha, molhos e acompanhamentos.',
  },
  {
    img: 'https://www.sabornamesa.com.br/media/k2/items/cache/5778877be1a35482f319be586a4e5dc3_XL.jpg',
    nome: 'Milkshake',
    preco: 6.99,
    descricao: 'Milkshake cremoso com diversos sabores disponíveis.',
  },
  {
    img: 'https://p2.trrsf.com/image/fget/cf/1200/900/middle/images.terra.com/2023/02/28/whatsapp-image-2023-02-28-at-01-53-47-(1)-1iyhprrq5e9tc.jpeg',
    nome: 'Salada Caesar',
    preco: 7.99,
    descricao: 'Salada com alface, frango, croutons e molho Caesar.',
  },
  {
    img: 'https://assets.unileversolutions.com/recipes-v2/54475.jpg',
    nome: 'Pizza Margherita',
    preco: 10.99,
    descricao: 'Pizza tradicional com molho de tomate e queijo.',
  },
  {
    img: 'https://midias.agazeta.com.br/2023/01/02/sorvete-3-cores-941224-article.png',
    nome: 'Sorvete',
    preco: 3.99,
    descricao: 'Sorvete de diferentes sabores em uma casquinha crocante.',
  },
  {
    img: 'https://cdn.deliway.com.br/blog/base/6a3/c8e/9db/sucos-diferentes.jpg',
    nome: 'Suco Natural',
    preco: 3.49,
    descricao: 'Suco de frutas frescas e naturais.',
  }
];



lanchoneteItens.forEach((item, idx) => {
  let itens = `
  <div onclick="adicionarItem(this)" class="${idx} item">
        <img src="${item.img}">
        <h1 id="itemNome" type class="nome">Nome: ${item.nome}</h1>
        <h2 id="itemPrec" class="preco">Preço: ${item.preco}</h2>
        <p id="itemDesc" class="descricao">Descrição: ${item.descricao}</p>
        
    </div>

    `
    let ladodeItens = document.querySelector(".conteinerLado01")
    ladodeItens.innerHTML += itens

  });
  
  function adicionarItem(elemento){
    let info = lanchoneteItens[elemento.classList[0]]
    let botaoRemover = `<button class="removedor" onclick="removerItem(event)">X</button>`
    document.querySelector(".tituloItens").innerHTML += info.nome + " " + info.preco + botaoRemover + "<br> <br>" 
  }
  
  
  function removerItem(evento){
    // let info = lanchoneteItens[evento.classList[0]]
    let remover = document.querySelector(".removedor")
    console.log(remover)
  }

// console.log('Preço:', lanchoneteItens[2].preco)
