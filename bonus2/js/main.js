let i;
const container = document.getElementById('container');


for (let i = 1; i <= 100; i++){ // VOGLIO AVERE UN CONTEGGIO DA 1 A 100

    if(i%3 == 0 && i%5 == 0){    //VOGLIO I NUMERI MULTIPLI DI 3 E 5 ABBIANO VALORE "FizzBuzz" 
        const fizzbuzz = `<div class="square fizzbuzz">FizzBuzz</div>`;
        container.innerHTML += fizzbuzz; 
    } else if(i%3 == 0){    //VOGLIO I NUMERI MULTIPLI DI 3 ABBIANO VALORE "Fizz"
        const fizz = `<div class="square fizz">Fizz</div>`;
        container.innerHTML += fizz;
    }else if(i%5 == 0){ //VOGLIO I NUMERI MULTIPLI DI 5 ABBIANO VALORE "Buzz"
        const buzz = `<div class="square buzz">Buzz</div>`;
        container.innerHTML += buzz;
    }else{
        const none = `<div class="square none">${i}</div>`;
        container.innerHTML += none;
    }
};




















