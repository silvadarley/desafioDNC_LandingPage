var Nome = document.getElementById("Nome")
var email = document.getElementById("Email")

function showmessage(){
    if(Nome === ""){
        alert("O nome é uma informação obrigatória!")
        Nome.style = "border: 1px; color: #ff0000"
    }
    else if (email === ""){
        alert("O email é uma informação obritória!")
    }
    else(Nome && email != "")
        alert("Dados enviados com sucesso !");
}