let matrizA = [];
let matrizB = [];
let matrizC = [];

for(let l=0;l<=1;l++){
    matrizA[l] = [];
    for(let c=0;c<=2;c++){
        matrizA[l][c] = Number(prompt(`Digite o valor para a posição [${l}][${c}] da matriz A: `));
    }
}

for(let l=0;l<=1;l++){
    matrizB[l] = [];
    for(let c=0;c<=2;c++){
        matrizB[l][c] = Number(prompt(`Digite o valor para a posição [${l}][${c}] da matriz B: `));
    }
}

for(let l=0;l<=1;l++){
    matrizC[l] = [];
    for(let c=0;c<=2;c++){
        matrizC[l][c] = matrizA[l][c] + matrizB[l][c];
    }
}

console.log ("==== EXIBINDO MATRIZ C ====");
for(let l=0;l<=1;l++){
    let linha = " ";
    
for(let c=0;c<=2;c++){
    linha += matrizC[l][c] + "\t";
 }
 console.log (linha)
}