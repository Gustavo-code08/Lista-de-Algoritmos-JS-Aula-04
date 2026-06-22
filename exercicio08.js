let matriz = [];

for(let l=0;l<=3;l++){
    matriz[l] = []
    for(let c=0;c<=3;c++){
        if(l === c){
            matriz[l][c] = 1
        }
        else{
            matriz[l][c] = 0
        }
    }
}

console.log ("======Exibindo Matriz Identidade 4x4======");

for(let l=0;l<=3;l++){
    let linha = " ";
    
for(let c=0;c<=3;c++){
    linha += matriz[l][c] + "\t";
 }
 console.log (linha)
}
