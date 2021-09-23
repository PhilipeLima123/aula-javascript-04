function sortfunction(a, b){
    return (a - b)
}

let numeros = [25, 23, 11, 55, 30,  6, 4, 21, 34, 89, 56];

numeros.sort(sortfunction);
console.log(numeros)