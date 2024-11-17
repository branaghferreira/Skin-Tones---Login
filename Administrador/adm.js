
document.getElementById('cancelar').onclick = function() {
    window.location.href = '../index.html';
};


document.getElementById('jaCadastrado').onclick = function() {
    window.location.href = 'login-administrador.html';
};


document.getElementById('form-administrador').onsubmit = function(event) {
    event.preventDefault(); 
    const senha = document.getElementById('senha').value;
    const confirmarSenha = document.getElementById('confirmar-senha').value;

    if (senha !== confirmarSenha) {
        alert("As senhas não coincidem. Por favor, tente novamente.");
        return;
    }

    alert("Cadastro realizado com sucesso!");
    window.location.href = '../index.html'; 
};
