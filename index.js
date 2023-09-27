// Code your solutions in this file
const newArray = []
function writeCards(array, event) {
    for(let count = 0; count<array.length; count++) {
       newArray.push(`Thank you, ${array[count]}, for the wonderful ${event} gift!`)
       
    }
    return newArray
}


function countDown(number) {
    while( 0 <= number){
        console.log(number);
        number--;
    }
}