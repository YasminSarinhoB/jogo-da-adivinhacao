let screeenOne =  document.querySelector('.screenOne')
let screeenTwo =  document.querySelector('.screenTwo')
let btnTry = document.querySelector('#btnTry');
let bntReset = document.querySelector('#btnReset');
let attempts = 1;

let number = Math.round(Math.random() * 10);

function toggleScreen(){
    screeenOne.classList.toggle('hide')
    screeenTwo.classList.toggle('hide')
}

function clickRamdom(event) {
    event.preventDefault()

    inputNumber = document.querySelector('#inputNumber');

    if(Number(inputNumber.value) == number){
        toggleScreen()
    }

    document.querySelector('.tryNumber').innerHTML = attempts;
    
    inputNumber.value = ''
    attempts++;
}

function reset(){
    number = Math.round(Math.random() * 10);
    toggleScreen()
    attempts = 1;
}

btnTry.addEventListener('click', clickRamdom)
bntReset.addEventListener('click', reset)