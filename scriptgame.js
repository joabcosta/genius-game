let order = [];
let clickOrder = [];
let score = 0;
/*
    0: verde
    1: vermelho
    2: amarelo
    3: azul
*/
const blue = document.querySelector('.blue');
const red = document.querySelector('.red');
const green = document.querySelector('.green');
const yellow = document.querySelector('.yellow');

/*Início da função para gerar sequencia, transformar variável aleatória em cor
e transformar cor css */
        let ordemAleatoria = () => {
            let ordemCorAleatoria = Math.floor(Math.random()*4);
            order[order.length] = ordemCorAleatoria;
            clickOrder = [];
            for(let i in order){
                let elementColor = createColorElement(order[i]);
                lightColor(elementColor, Number(i)+1);
            }
        }
        //Inicio funcao para transformar variavel int em cor
        let createColorElement = (color) =>{
            switch (color){
                case 0: 
                    return green;
                case 1:
                    return red;
                case 2:
                    return yellow;
                case 3:
                    return blue;
                default:
                    console.log('erro');
                    break;
            }
        }
        /* --... fim da função de capturar cor ...-- */
        //Inicio da função p/: acionar cores da sequencia
        let lightColor = (element, number) =>{
            number = number * 500;
            setTimeout(()=>{
                element.classList.add('selected');
            }, number - 250);

            setTimeout(()=>{
                element.classList.remove('selected');
            },number+150);
        }
        /* --... fim da função de criar cores aleatorias ...-- */
/* --... fim da função para gerar sequencia, transformar variável e
transformar cor css ...-- */

//verifica a ordem de click's do jogador.
let verificarOrdem = () =>{
    for(let i in clickOrder){
        if(clickOrder[i]!= order[i]){
            endgame();
            break;
        }
    }
    if(clickOrder.length == order.length){
        alert(`Iniciando próximo nível. Pontuação atual: ${score}`);
        nextLevel();
    }
}
/* --... fim da verificação da ordem de clickes do jogador ...-- */

//função para capturar do usuário a cor selecionada por ele
let click = (color) =>{
    clickOrder[clickOrder.length] = color;
    createColorElement(color).classList.add('selected');
    setTimeout(()=>{
        createColorElement(color).classList.remove('selected');
        verificarOrdem();
    },250);
}
green.addEventListener('click', click(0));
red.addEventListener('click', click(1));
yellow.addEventListener('click', click(2));
blue.addEventListener('click', click(3));

green.onclick = () => click(0);
red.onclick = () => click(1);
yellow.onclick = () => click(2);
blue.onclick = () => click(3);
/* --... fim da verificação click do jogador ...-- */

//funções de jogo - nextlevel e endgame
let nextLevel = () =>{
    score+=10;
    ordemAleatoria();
}
let endgame = () =>{
    alert(`Game over: Pontuação final = ${score}`);
    order = [];
    clickOrder = [];
    playGame();
}
let playGame = () =>{
    alert('Iniciando novo jogo!')
    score = 0;
    nextLevel();
}
/*--... fim das funções basicas de jogo ...-- */


playGame();