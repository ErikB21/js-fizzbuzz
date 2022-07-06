
for (let i = 1; i <= 100; i++){ // VOGLIO AVERE UN CONTEGGIO DA 1 A 100

    if(i%3 == 0 && i%5 == 0){    //VOGLIO I NUMERI MULTIPLI DI 3 E 5 ABBIANO VALORE "FizzBuzz" 
        console.log('FizzBuzz');
    } else if(i%3 == 0){    //VOGLIO I NUMERI MULTIPLI DI 3 ABBIANO VALORE "Fizz"
        console.log('Fizz')
    }else if(i%5 == 0){ //VOGLIO I NUMERI MULTIPLI DI 5 ABBIANO VALORE "Buzz"
        console.log('Buzz')
    }else{
        console.log(i)
    }
};







