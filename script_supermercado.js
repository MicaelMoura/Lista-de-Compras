var itens = [];

document.querySelector('input[type=submit]')
.addEventListener('click', ()=> {
    var nomeProduto = document.querySelector('input[name=nome_produto]');
    var valorProduto = document.querySelector('input[name=valor_produto]');
    var valorTotal = document.querySelector('.soma-produto span');

    let total = 0;

    itens.push({
        nome: nomeProduto.value,
        valor: valorProduto.value
    });

    /*
        Exemplo de elemento a ser adicionado

        <div class="lista-produto-single">
            <h3>Café</h3>
            <span>R$ 18,00</span>
        </div>
    */

    let listaProdutos = document.querySelector('.lista-produtos');
    listaProdutos.innerHTML = "";
    itens.map(function(val){
        val.valor = parseFloat(val.valor).toFixed(2);
        listaProdutos.innerHTML+=`
            <div class="lista-produto-single">
                <h3>${val.nome}</h3>
                <span>R$ ${val.valor}</span>
            </div>        
        `;
        total+=parseFloat(val.valor);
    })

    total = total.toFixed(2);
        
    valorTotal.innerHTML = total;

    nomeProduto.value = "";
    valorProduto.value = "";
})

document.querySelector('button[name=limpa]')
.addEventListener('click',()=>{
    itens = [];
    document.querySelector('.lista-produtos').innerHTML = "";
    document.querySelector('.soma-produto span').innerHTML = "0.00";
})