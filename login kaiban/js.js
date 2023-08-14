function login() {
    var email = document.getElementById("email")
    var senha = document.getElementById("senha")

    if (email.value == "teste@gmail.com" && senha.value == "1234") {
        alert("Bem vinda geovanna")
    } else {
        alert("Você não é a Geovanna")
    }
   
}