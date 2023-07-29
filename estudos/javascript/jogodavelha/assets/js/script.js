let jogador1 = new Jogador("X");
let jogador2 = new Jogador("O");

const stage = new Stage(jogador1,
    document.querySelector('.fileira1horizontal'),
    document.querySelector('.fileira2horizontal'),
    document.querySelector('.fileira3horizontal'),
    document.querySelector('#nomeVencedor'));
    
stage.start(stage)

document.querySelector("#novoJogo").addEventListener('click', () => window.location.reload(true));
