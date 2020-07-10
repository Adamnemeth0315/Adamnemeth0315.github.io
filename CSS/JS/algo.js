//Összegző algoritmus

let numericArray = [1, 2, 3, 5, 6, 7, 8, 9];
let sum = 0; 
for ( let i = 0; i < numericArray.length; i++) {
    sum += numericArray[i];
}
 console.log(sum);

//Számláló algoritmus
 
let db = 0; 
 for (i = 0; i < numericArray.length; i++) {
     if( numericArray[i] % 2 == 0){
         db++;
     }
 }
 console.log("Then even numbers:", db);

// Szélsőérték keresés: 

let biggest = numericArray[0];
for( let i = 0; i < numericArray.length; i++){
    if (numericArray[i] > biggest) {
        biggest = numericArray[i];
    }
} 
console.log("The biggest element: ", biggest);

//Eldöntés tétele

let contains = false; 
for( let i =0; i < numericArray.length && contains == false; i++) {
    if ( numericArray == 2) {
        contains = true; 
    }
}
console.log("This array contains 2:", contains);