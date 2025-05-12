document.addEventListener('DOMContentLoaded', function () {

    let fila = []; 
    let proximaSenhaNum = 1;
    let senhaEmAtendimento = null; 

    const senhaAtualElement = document.getElementById('senhaAtual'); 
    const filaEsperaElement = document.getElementById('filaEspera');
    const btnGerarSenha = document.getElementById('btnGerarSenha'); 
    const btnChamarSenha = document.getElementById('btnChamarSenha'); 

    function atualizarDisplays() {
        senhaAtualElement.textContent = senhaEmAtendimento ? senhaEmAtendimento : '--';

        if (fila.length > 0) {
            filaEsperaElement.innerHTML = fila.map(senha => `<span class="senha-item">${senha}</span>`).join('');
            filaEsperaElement.classList.remove('empty');
        } else { 
            filaEsperaElement.textContent = 'Fila vazia';
            filaEsperaElement.classList.add('empty');
        }

        btnChamarSenha.disabled = fila.length === 0;
    }


    function gerarNovaSenha() {
        const numeroFormatado = String(proximaSenhaNum).padStart(3, '0');
        const novaSenha = "S" + numeroFormatado;

        fila.push(novaSenha);
        proximaSenhaNum++;
        atualizarDisplays();
    }

    function chamarProximaSenha() {
        if (fila.length > 0) {
            senhaEmAtendimento = fila.shift();
        } else {
            senhaEmAtendimento = null;
        }
        atualizarDisplays();
    }

    btnGerarSenha.addEventListener('click', gerarNovaSenha);

    btnChamarSenha.addEventListener('click', chamarProximaSenha);

    atualizarDisplays();
});