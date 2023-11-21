let totalGeral = 0;
document.getElementById('lista-produtos').innerHTML = '';
document.getElementById('valor-total').innerHTML = '';
function adicionar() {
    //recuperar valores nome do produto, quantiade e valor
    // calcular o preço, nosso subtotal
    // adicionar no carrinho 
    // atualizar o valor total 
    let produtoAdicionado = document.getElementById('produto').value;
    let nomeProduto = produtoAdicionado.split('-') [0];
    let valorUnitário = produtoAdicionado.split('R$') [1];
    let quantidade = document.getElementById('quantidade');
    let subtotal = quantidade.value * valorUnitário;
    let valorNoCarrinho =document.getElementById('valor-total');
    let listaCarrinho = document.getElementById('lista-produtos');
        listaCarrinho.innerHTML = listaCarrinho.innerHTML + `<section class="carrinho__produtos__produto">
        <span class="texto-azul">${quantidade.value}x</span> ${nomeProduto} <span class="texto-azul">${subtotal}</span>
      </section>`;

    totalGeral = totalGeral + subtotal;
    let campoTotal = document.getElementById('valor-total'); 
      campoTotal.textContent = `${totalGeral}`; 
      document.getElementById('quantidade').value = '';
}   

    // ativando o botão limpar


function limpar() {
    document.getElementById('lista-produtos').innerHTML = '';
    document.getElementById('valor-total').innerHTML = '';
    document.getElementById('quantidade').value = '';
}