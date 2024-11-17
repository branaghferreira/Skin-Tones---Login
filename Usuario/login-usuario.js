document.getElementById('login-form').onsubmit = function(event) {
    event.preventDefault(); 
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;

    
    if (email === "usuario@exemplo.com" && senha === "senha123") {
        alert("Login bem-sucedido!");
        window.location.href = "home-usuario.html";  
    } else {
        alert("Email ou senha incorretos. Tente novamente.");
    }
};


document.getElementById('esqueci-senha').onclick = function() {
    window.location.href = "recuperar-senha.html";
};
