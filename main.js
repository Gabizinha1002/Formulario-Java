function alterarMensagem() {
    let nome = prompt("Digite seu nome:")

    if (!nome || nome.trim() == ""){
        nome = "Amigo"
    }
    
    document.getElementById("teste1").innerText = `Bem Vindo, ${nome}`;
}