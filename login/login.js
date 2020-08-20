let listaLogins = ["joao", "caio", "bruno"];
let listaSenhas = ["1234", "senha", "senha123"];

function logar(){
    // Pega o elemento que é o atributo "login"
    let elementoLogin = document.getElementById("login");
    let elementoSenha = document.getElementById("senha");

    /* Verifica se o valor do login e da senha não são vazios
       método trim() utilizado para remover espaços*/
    if(elementoLogin.value.trim() !== "" && elementoSenha.value.trim() !== ""){
        // Pega a ultima posição do array que contenha o login informado
        let loginPos = listaLogins.lastIndexOf(elementoLogin.value);
        let senhaPos = listaSenhas.lastIndexOf(elementoSenha.value);

        if(loginPos >= 0 && senhaPos >= 0 && loginPos == senhaPos){
            alert("Login efetuado com sucesso!");
        } else {
            alert("Login e senha não encontrados!");
        }
    } else {
        alert("Por favor informe suas credenciais!");
    }
}