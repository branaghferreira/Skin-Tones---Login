document.getElementById('fornecedorButton').onclick = function() {
    console.log("Fornecedor clicado!"); 
    window.location.href = 'fornecedor/cadastro-fornecedor.html'; 
};

document.getElementById('usuarioButton').onclick = function() {
    console.log("Usuário clicado!");  
    window.location.href = 'usuario/cadastro-usuario.html';
};

document.getElementById('adminButton').onclick = function() {
    console.log("Administrador clicado!");  
    window.location.href = 'administrador/cadastro-adm.html'; 
};

