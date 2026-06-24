document.addEventListener('DOMContentLoaded', () => {
    const greetBtn = document.getElementById('greet-btn');
    const themeToggleBtn = document.getElementById('theme-toggle');
    
    // Função para definir o ícone correto com base no tema
    const updateThemeIcon = (isLight) => {
        const iconSpan = themeToggleBtn.querySelector('.theme-icon');
        if (iconSpan) {
            iconSpan.textContent = isLight ? '☀️' : '🌙';
        }
    };

    // 1. Carregar tema preferido do localStorage se existir
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
        document.body.classList.add('light-theme');
        updateThemeIcon(true);
    }

    // 2. Lógica para alternar o tema
    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', () => {
            const isLightTheme = document.body.classList.toggle('light-theme');
            
            // Salvar a escolha no localStorage
            localStorage.setItem('theme', isLightTheme ? 'light' : 'dark');
            
            // Atualizar o ícone do botão
            updateThemeIcon(isLightTheme);
            
            console.log(`Tema alterado para: ${isLightTheme ? 'Claro' : 'Escuro'}`);
        });
    }

    // 3. Lógica do botão de saudação
    if (greetBtn) {
        greetBtn.addEventListener('click', () => {
            alert('Olá');
            console.log('Mensagem de boas-vindas exibida com sucesso.');
        });
    }
});
