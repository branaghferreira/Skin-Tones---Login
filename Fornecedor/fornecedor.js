document.getElementById('cancelar').onclick = function() {
    window.location.href = '../index.html';
};


document.getElementById('jaCadastrado').onclick = function() {
    window.location.href = 'login-fornecedor.html';
};

document.getElementById('cadastroFornecedorForm').onsubmit = function(event) {
    const senha = document.getElementById('senha').value;
    const confirmarSenha = document.getElementById('confirmar-senha').value;

    if (senha !== confirmarSenha) {
        event.preventDefault(); 
        alert("As senhas não coincidem. Por favor, tente novamente.");
    } else {
        alert("Cadastro realizado com sucesso!");
        window.location.href = '../index.html';
    }
};
