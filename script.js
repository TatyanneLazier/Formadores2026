// 1. Mapeia os elementos do HTML para o JavaScript
const botaoLike = document.getElementById('btn-like');
const contadorTexto = document.getElementById('contador-likes');

// 2. Busca o número de likes já salvos no navegador. Se não existir nada, começa em 0.
let totalLikes = localStorage.getItem('guardarLikes') || 0;

// 3. Mostra na tela o valor que estava guardado assim que a página carrega
contadorTexto.innerText = totalLikes;

// 4. Cria a ação que acontece quando alguém clica no botão
botaoLike.addEventListener('click', () => {
    // Transforma em número e soma +1
    totalLikes = Number(totalLikes) + 1;
    
    // Atualiza o texto na tela para o usuário ver o novo número
    contadorTexto.innerText = totalLikes;
    
    // Guarda o novo valor na memória do navegador
    localStorage.setItem('guardarLikes', totalLikes);
    
    // Exibe o seu alerta de sucesso
    alert('Você deu um like!');
});