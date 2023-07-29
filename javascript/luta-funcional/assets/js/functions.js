const defaultCharacter = {
    name: '',
    life: 1,
    maxLife: 1,
    attack: 0,
    defense: 0
}

function createKnight(name) {
    return {
        ...defaultCharacter,
        name: name,
        life: 100,
        maxLife: 100,
        attack: 10,
        defense: 8
    }
}

function createSorcerer(name) {
    return {
        ...defaultCharacter,
        name: name,
        life: 80,
        maxLife: 80,
        attack: 14,
        defense: 3
    }
}

function createLittleMonster() {
    return {
        ...defaultCharacter,
        name: 'LittleMonster',
        life: 40,
        maxLife: 40,
        attack: 4,
        defense: 4
    }
}

function createBigMonster() {
    return {
        ...defaultCharacter,
        name: 'BigMonster',
        life: 120,
        maxLife: 120,
        attack: 16,
        defense: 6
    }
}

const stage = {
    figther1: null,
    figther2: null,
    figther2El: null,
    figther2El: null,
    start(figther1, figther2, figther1El, figther2El) {
        this.figther1 = figther1;
        this.figther2 = figther2;
        this.figther1El = figther1El;
        this.figther2El = figther2El;

        this.figther1El.querySelector('.attackButton').addEventListener('click', () => this.doAttack(this.figther1, this.figther2));
        this.figther2El.querySelector('.attackButton').addEventListener('click', () => this.doAttack(this.figther2, this.figther1));

        this.update();
    },
    update() {
        //Figther 1
        this.figther1El.querySelector('.name').innerHTML = `${this.figther1.name} - ${this.figther1.life.toFixed(1)} HP`;
        let lifePct1 = ((this.figther1.life / this.figther1.maxLife) * 100)
        this.figther1El.querySelector('.bar').style.width = `${lifePct1}%`;
        //Figther 2
        this.figther2El.querySelector('.name').innerHTML = `${this.figther2.name} - ${this.figther2.life.toFixed(1)} HP`;
        let lifePct2 = ((this.figther2.life / this.figther2.maxLife) * 100)
        this.figther2El.querySelector('.bar').style.width = `${lifePct2}%`;
    },
    doAttack(attacking, attacked) {

        if (attacking.life <= 0) {
            log.addMessage(`${attacking.name} está morto, não pode atacar!!`)
            return;
        } else if (attacked.life <= 0) {
            log.addMessage(`${attacked.name} está morto, tenha misericórdia!!`)
            return;
        }

        let attackFactor = (Math.random() * 2).toFixed(2);
        let defenseFactor = (Math.random() * 2).toFixed(2);
        let defenseAttacked = attacked.defense;
        let attackAttacking = attacking.attack;

        let dano = ((defenseAttacked * defenseFactor) - (attackAttacking * attackFactor));

        // this.log.addMessage(`${attacking.name} está atacando o ${attacked.name}`)
        if ((dano) < 0) {
            attacked.life += dano;
            log.addMessage(`${attacking.name} causou de dano ${(dano*-1).toFixed(2)} no ${attacked.name}...`)
            attacked.life = attacked.life < 0 ? 0 : attacked.life;
        } else {
            log.addMessage(`${attacked.name} conseguiu defender...`)
        }

        this.update();
    }
}

const log = {
    list : [],
    addMessage(message) {
        this.list.push(message);
        this.render()
    },
    render() {
        const logEl = document.querySelector('.log');
        logEl.innerHTML = '';

        let listSize = this.list.length - 1;
        let i = listSize;

        while (i >= 0) {
            logEl.innerHTML += `<li>${this.list[i]}</li>`;
            i--
        }
    }
}