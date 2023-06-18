class Jogador {
    marca = "";
    constructor(marca) {
        this.marca = marca;
    }
}

class Stage {

    vezDaJogada = 1;
    fimDaPartida = false;

    constructor(jogador1, tabuleiroColuna1, tabuleiroColuna2, tabuleiroColuna3, vencedor) {
        this.jogador1 = jogador1;
        this.tabuleiroColuna1 = tabuleiroColuna1;
        this.tabuleiroColuna2 = tabuleiroColuna2;
        this.tabuleiroColuna3 = tabuleiroColuna3;
        this.vencedor = vencedor;
    }

    start() {
        this.tabuleiroColuna1.querySelector('.quadro1').addEventListener('click', () => this.clickButton(this.tabuleiroColuna1.querySelector('.quadro1')));
        this.tabuleiroColuna1.querySelector('.quadro2').addEventListener('click', () => this.clickButton(this.tabuleiroColuna1.querySelector('.quadro2')));
        this.tabuleiroColuna1.querySelector('.quadro3').addEventListener('click', () => this.clickButton(this.tabuleiroColuna1.querySelector('.quadro3')));
        this.tabuleiroColuna2.querySelector('.quadro4').addEventListener('click', () => this.clickButton(this.tabuleiroColuna2.querySelector('.quadro4')));
        this.tabuleiroColuna2.querySelector('.quadro5').addEventListener('click', () => this.clickButton(this.tabuleiroColuna2.querySelector('.quadro5')));
        this.tabuleiroColuna2.querySelector('.quadro6').addEventListener('click', () => this.clickButton(this.tabuleiroColuna2.querySelector('.quadro6')));
        this.tabuleiroColuna3.querySelector('.quadro7').addEventListener('click', () => this.clickButton(this.tabuleiroColuna3.querySelector('.quadro7')));
        this.tabuleiroColuna3.querySelector('.quadro8').addEventListener('click', () => this.clickButton(this.tabuleiroColuna3.querySelector('.quadro8')));
        this.tabuleiroColuna3.querySelector('.quadro9').addEventListener('click', () => this.clickButton(this.tabuleiroColuna3.querySelector('.quadro9')));

        console.log(this.vencedor);
    }

    clickButton(quadro) {
        this.jogada(quadro);
        this.verificaTabuleiro();
    }

    jogada(quadro) {
        let marca = (this.vezDaJogada === 1 ? "X" : "O")
        
        if (this.fimDaPartida) {
            alert("Partida já finalizada!")
            return
        }
        
        if (!quadro.innerHTML) {
            quadro.innerHTML = marca;
            this.atualizaVez();
            //this.verificaTabuleiro();
        } else {
            alert("Casa já ocupada, escolha outra!!!")
            return
        }
    }

    atualizaVez() {
        console.log(this.vezDaJogada);
        if (this.vezDaJogada === 1) {
            this.vezDaJogada = 2;
        } else {
            this.vezDaJogada = 1;
        }
    }

    verificaTabuleiro() {

        let listaCasas = this.preencheListaCasas();

        let marcas = ['X', 'O'];

        for (let marca of marcas) {
            if (listaCasas[0] == marca
                && listaCasas[1] == marca
                && listaCasas[2] == marca
            ) {
                this.vencedor.innerHTML = `Vitória do jogador ${marca}`
                this.fimDaPartida = true;
                return;
            } else if (
                listaCasas[3] == marca
                && listaCasas[4] == marca
                && listaCasas[5] == marca
            ) {
                this.vencedor.innerHTML = `Vitória do jogador ${marca}`
                this.fimDaPartida = true;
                return;
            } else if (
                listaCasas[6] == marca
                && listaCasas[7] == marca
                && listaCasas[8] == marca
            ) {
                this.vencedor.innerHTML = `Vitória do jogador ${marca}`
                this.fimDaPartida = true;
                return;
            } else if (
                listaCasas[0] == marca
                && listaCasas[3] == marca
                && listaCasas[6] == marca
            ) {
                this.vencedor.innerHTML = `Vitória do jogador ${marca}`
                this.fimDaPartida = true;
                return;
            } else if (
                listaCasas[1] == marca
                && listaCasas[4] == marca
                && listaCasas[7] == marca
            ) {
                this.vencedor.innerHTML = `Vitória do jogador ${marca}`
                this.fimDaPartida = true;
                return;
            } else if (
                listaCasas[2] == marca
                && listaCasas[5] == marca
                && listaCasas[8] == marca
            ) {
                this.vencedor.innerHTML = `Vitória do jogador ${marca}`
                this.fimDaPartida = true;
                return;
            } else if (
                listaCasas[0] == marca
                && listaCasas[4] == marca
                && listaCasas[8] == marca
            ) {
                this.vencedor.innerHTML = `Vitória do jogador ${marca}`
                this.fimDaPartida = true;
                return;
            } else if (
                listaCasas[2] == marca
                && listaCasas[4] == marca
                && listaCasas[6] == marca
            ) {
                this.vencedor.innerHTML = `Vitória do jogador ${marca}`
                this.fimDaPartida = true;
                return;
            } else {
                
            }
        }
    }

    preencheListaCasas() {

        let lista = []

        lista.push(this.tabuleiroColuna1.querySelector('.quadro1').innerHTML);
        lista.push(this.tabuleiroColuna1.querySelector('.quadro2').innerHTML);
        lista.push(this.tabuleiroColuna1.querySelector('.quadro3').innerHTML);
        lista.push(this.tabuleiroColuna2.querySelector('.quadro4').innerHTML);
        lista.push(this.tabuleiroColuna2.querySelector('.quadro5').innerHTML);
        lista.push(this.tabuleiroColuna2.querySelector('.quadro6').innerHTML);
        lista.push(this.tabuleiroColuna3.querySelector('.quadro7').innerHTML);
        lista.push(this.tabuleiroColuna3.querySelector('.quadro8').innerHTML);
        lista.push(this.tabuleiroColuna3.querySelector('.quadro9').innerHTML);

        return lista
    }
}

