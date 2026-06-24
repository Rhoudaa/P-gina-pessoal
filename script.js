document.addEventListener('DOMContentLoaded', () => {
    const greetBtn = document.getElementById('greet-btn');
    
    if (greetBtn) {
        greetBtn.addEventListener('click', () => {
            // Exibe um alerta na tela com a mensagem solicitada
            alert('Olá');
            
            // Log amigável no console
            console.log('Mensagem de boas-vindas exibida com sucesso.');
        });
    }
});
