let matriz = [];

for(let l=0;l<=2;l++){
    matriz[l] = [];
    for(let c=0;c<=2;c++){
        matriz[l][c] = Number(prompt(`Digite o valor para a posição [${l}][${c}]`));
    }
}
let soma = matriz[0][0] + matriz[1][1] + matriz[2][2];

console.log("====Soma Diagonal Principal====");
console.log(`Valores encontrados: ${matriz[0][0]},${matriz[1][1]},${matriz[2][2]}`);
console.log(`soma = ${soma}`)