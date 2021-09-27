const form = document.querySelector('.form');

form.addEventListener('submit', calculate);

function values() {
    let destiny = document.querySelector('.destiny').value;
    let budget = document.querySelector('.budget').value;
    let accomodation = document.querySelector('.accomodation').value;
    let transport = document.querySelector('.transport').value;
    let food = document.querySelector('.food').value;
    let shopping = document.querySelector('.shopping').value;

    return {destiny, budget, accomodation, transport, food, shopping};
}

function calculate(e) {
    e.preventDefault();

    const {destiny, budget, accomodation, transport, food, shopping} = values();

    let sum = parseInt(accomodation) + parseInt(transport) + parseInt(food) +
    parseInt(shopping);

    let total = budget - sum;

    UI(destiny, budget, total);

}

function UI(destiny, budget, total) {
    const airplaneP = document.querySelector('.airplane-p');
    const walletP = document.querySelector('.wallet-p');
    const dollarP = document.querySelector('.dollar-p');
 
    airplaneP.innerHTML = destiny;
    walletP.innerHTML = budget;
    dollarP.innerHTML = total;

    reset();
}

function reset() {
    document.querySelector('.form').reset();
}
