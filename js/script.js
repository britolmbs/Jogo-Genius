let order =[];
let clickedOrder = [];
let score = 0;

//0 - verde
//1 - vermelho
//2 - amarelo
//3 - azul

const blue = document.querySelector('.blue');
const red = document.querySelector('.red');
const green = document.querySelector('.green');
const yellow = document.querySelector('.yellow');

let shuffleOrder = () =>{
    let colorOrder = Math.floor(Math.random() * 4);
    order[order.length] = colorOrder;
    clickedOrder = [];
    
    for(let i in order){
        let elementColor = createElement(order[i]);
        lightColor(elementColor, Number(i) + 1);
    }
}

let lightColor = (element, number) => {
    number = number * 500;
    setTimeout(() =>{
        element.classList.add('selected');
    }, number - 250);
    setTimeout(() =>{
        element,classList.remove('selected');
    });
}
 
let checkOrder = () => {
    for(let i in clickedOrder){
        if(clickedOrder[i] != order[i])
    }
}