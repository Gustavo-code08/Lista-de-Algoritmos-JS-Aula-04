let matriz = [];
let maior;

for(let l=0;l<=2;l++){
    matriz[l] = [];
    for(let c=0;c<=3;c++){
        let valor = Number(prompt(`Digite o desempenho da equipe ${l + 1} no ${c + 1} trimestre: `));
        matriz[l][c] = valor;
    }
}

for(let l=0;l<=2;l++){
    maior = matriz[l][0];
    for(let c=0;c<=3;c++){
        if(matriz[l][c] > maior){
            maior = matriz[l][c];
        }
    }
  console.log (`A maior pontuação da equipe ${l + 1} foi ${maior}`);
  alert (`A maior pontuação da equipe ${l + 1} foi ${maior}`);
}