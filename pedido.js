var quantHamburger = 0
function enviarHamburger() {
    var hamburger = parseFloat(document.getElementById("quanthamburger").value);
    if (hamburger != 0) {
        quantHamburger = parseFloat(document.getElementById("quanthamburger").value);
        document.getElementById("item").innerHTML += "<div class='descquant' id='addhamburger'>" + quantHamburger + " - Hamburgão" + "</div>";
        document.getElementById("botaohamburger").style.display = "none"
        document.getElementById("botaohamburgeron").style.display = "block"
        console.log(quantHamburger)
    }
}

function removerHamburger(quantHamburger) {
    zerarHamburger()
    document.getElementById("addhamburger").remove()
}

function zerarHamburger() {
    document.getElementById("botaohamburger").style.display = "block"
    document.getElementById("botaohamburgeron").style.display = "none"
    quanthamburger.value = 0
}

var quantDuplo = 0
function enviarDuplo() {
    var duplo = parseFloat(document.getElementById("quantduplo").value);
    if (duplo != 0) {
        quantDuplo = parseFloat(document.getElementById("quantduplo").value);
        document.getElementById("item").innerHTML += "<div class='descquant' id='addduplo'>" + quantDuplo + " - Duplo" + "</div>";
        document.getElementById("botaoduplo").style.display = "none"
        document.getElementById("botaoduploon").style.display = "block"
    }
}
function removerDuplo(quantDuplo) {
    zerarDuplo()
    document.getElementById("addduplo").remove()
}

function zerarDuplo() {
    document.getElementById("botaoduplo").style.display = "block"
    document.getElementById("botaoduploon").style.display = "none"
    quantduplo.value = 0
}

var quantFritas = 0
function enviarFritas() {
    var fritas = parseFloat(document.getElementById("quantfritas").value);
    if (fritas != 0) {
        quantFritas = parseFloat(document.getElementById("quantfritas").value);
        document.getElementById("item").innerHTML += "<div class='descquant' id='addfritas'>" + quantFritas + " - Fritas" + "</div>";
        document.getElementById("botaofritas").style.display = "none"
        document.getElementById("botaofritason").style.display = "block"
    }
}
function removerFritas() {
    zerarFritas()
    document.getElementById("addfritas").remove()
}

function zerarFritas() {
    document.getElementById("botaofritas").style.display = "block"
    document.getElementById("botaofritason").style.display = "none"
    quantfritas.value = 0
}

var quantRefri = 0
function enviarRefri() {
    var refri = parseFloat(document.getElementById("quantrefri").value);
    if (refri != 0) {
        quantRefri = parseFloat(document.getElementById("quantrefri").value);
        document.getElementById("item").innerHTML += "<div class='descquant' id='addrefri'>" + quantRefri + " - Refri" + "</div>";
        document.getElementById("botaorefri").style.display = "none"
        document.getElementById("botaorefrion").style.display = "block"
    }
}
function removerRefri() {
    zerarRefri()
    document.getElementById("addrefri").remove()
}

function zerarRefri() {
    document.getElementById("botaorefri").style.display = "block"
    document.getElementById("botaorefrion").style.display = "none"
    quantrefri.value = 0
}

var quantSundae
function enviarSundae() {
    var sundae = parseFloat(document.getElementById("quantsundae").value);
    if (sundae != 0) {
        quantSundae = parseFloat(document.getElementById("quantsundae").value)
        document.getElementById("item").innerHTML += "<div class='descquant' id='addsundae'>" + quantSundae + " - Sundae" + "</div>";
        document.getElementById("botaosundae").style.display = "none"
        document.getElementById("botaosundaeon").style.display = "block"
    }
}
function removerSundae() {
    zerarSundae()
    document.getElementById("addsundae").remove()
}

function zerarSundae() {
    document.getElementById("botaosundae").style.display = "block"
    document.getElementById("botaosundaeon").style.display = "none"
    quantsundae.value = 0
}

function Total() {
    var totalHamburger = 0
    if (quantHamburger > 0) {
        totalHamburger = parseFloat(document.getElementById("quanthamburger").value)
    }

    var totalDuplo = 0
    if (quantDuplo > 0) {
        totalDuplo = parseFloat(document.getElementById("quantduplo").value)
        console.log(totalDuplo)
    }

    var totalFritas = 0
    if (quantFritas > 0) {
        totalFritas = parseFloat(document.getElementById("quantfritas").value)
    }

    var totalRefri = 0
    if (quantRefri > 0) {
        totalRefri = parseFloat(document.getElementById("quantrefri").value)
    }

    var totalSundae = 0
    if (quantSundae > 0) {
        totalSundae = parseFloat(document.getElementById("quantsundae").value)
    }

    var Soma = totalHamburger * 15 + totalDuplo * 25 + totalFritas * 5 + totalRefri * 10 + totalSundae * 10
    console.log(Soma)
    document.getElementById("soma").innerHTML = "Total a pagar: R$" + Soma.toFixed(2)

}

var i = 0;

class Pedido {
    constructor(numero, hamburger, duplo, fritas, refri, sundae) {
        this.numero = numero;
        this.hamburger = hamburger;
        this.duplo = duplo;
        this.fritas = fritas;
        this.refri = refri;
        this.sundae = sundae;
        this.status = status;
    }
}

/*************************** Variaveis Globais ***************************/
var pedidos = [];
var pedidoEdicao = null

/************************ Variaveis Banco de Dados ***********************/
const dbRef = firebase.database().ref();
const funcsRef = dbRef.child('pedidos');

/*********************** Load Pedidos do DB ******************************/
funcsRef.on("child_added", snap => {
    let f = snap.val();
    f.key = snap.key;
    pedidos.push(f);
    addNovaLinhaTabelaPedidoGUI(f);
});




/*************************** Variaveis Banco de Dados  ***************************/
constdbRef = firebase.database().ref();
constfuncsRef = dbRef.child('pedidos');




function salvar() {

        let pedido = new Pedido();

        pedido.numero = parseInt(document.getElementById("numero").value);
        pedido.hamburger = parseInt(document.getElementById("quanthamburger").value);
        pedido.duplo = parseFloat(document.getElementById("quantduplo").value);
        pedido.fritas = parseFloat(document.getElementById("quantfritas").value);
        pedido.refri = parseFloat(document.getElementById("quantrefri").value);
        pedido.sundae = parseFloat(document.getElementById("quantsundae").value);
        pedido.status = "Preparando";

        //pedidos.push(pedido);

        //addNovaLinhaTabelaPedidoGUI(pedido);

        //Salva no Banco de Dado, nao salva a key
        funcsRef.push({
            "numero": pedido.numero,
            "hamburger": pedido.hamburger,
            "duplo": pedido.duplo,
            "fritas": pedido.fritas,
            "refri": pedido.refri,
            "sundae": pedido.sundae,
            "status": pedido.status
        });

        alert("Pedido enviado com sucesso!");

        if (pedido.hamburger > 0) {
            removerHamburger()
        }
        if (pedido.duplo > 0) {
            removerDuplo()
        }
        if (pedido.fritas > 0) {
            removerFritas()
        }
        if (pedido.refri > 0) {
            removerRefri()
        }
        if (pedido.sundae > 0) {
            removerSundae()
        }

        numeroSenha = parseInt(document.getElementById("numero").value)
        numeroSenha = numeroSenha + 1;
        document.getElementById("numero").value = numeroSenha
}

function addNovaLinhaTabelaPedidoGUI(pedido) {
    let tabela = document.getElementById("idPedidosTable");
    let linha = tabela.insertRow(pedidos.length);

    let celNumero = linha.insertCell(0);
    let celHamburger = linha.insertCell(1);
    let celDuplo = linha.insertCell(2);
    let celFritas = linha.insertCell(3);
    let celRefri = linha.insertCell(4);
    let celSundae = linha.insertCell(5);
    let celStatus = linha.insertCell(6);
    let celBotoes = linha.insertCell(7);

    celNumero.innerHTML = pedido.numero;
    celHamburger.innerHTML = pedido.hamburger;
    celDuplo.innerHTML = pedido.duplo;
    celFritas.innerHTML = pedido.fritas;
    celRefri.innerHTML = pedido.refri;
    celSundae.innerHTML = pedido.sundae;
    celStatus.innerHTML = pedido.status;

    addBotoesLinhaTableGUI(celBotoes, pedido);
}

function addBotoesLinhaTableGUI(cell, pedido) {

    var btnEditar = document.createElement("BUTTON");

    btnEditar.innerHTML = "Finalizar";
    btnEditar.name = "btnFinalizar";
    btnEditar.onclick = function () {
        finalizar(cell.parentNode, pedido);
    };

    cell.appendChild(btnEditar);
}

function finalizar(row, pedido) {
    //rowEdit.cells[6].innerHTML = "Concluido!"
    
    pedido.status = "Concluido!"



    //UpDate no Banco de Dados
    funcsRef.child(pedido.key).update(
        {
            "status": pedido.status
        }
    );
    pedidoEdicao = null
    rowEdit = row
    rowEdit.cells[7].innerHTML = ""
    rowEdit.cells[6].innerHTML = "Concluido!"
    senha = rowEdit.cells[0].textContent
    document.getElementById("retirar").innerHTML = senha    
}