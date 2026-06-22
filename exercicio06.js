let matriz = [];

for(let l=0;l<=2;l++){
    matriz[l] = []
    for(let c=0;c<=2;c++){
        matriz[l][c] = Number(prompt(`Digite o valor para a posição [${l}][${c}]`));
    }
}

console.log ("======Exibindo Matriz 3x3======");

for(let l=0;l<=2;l++){
    let linha = " ";
    
for(let c=0;c<=2;c++){
    linha += matriz[l][c] + "\t";
 }
 console.log (linha)
}