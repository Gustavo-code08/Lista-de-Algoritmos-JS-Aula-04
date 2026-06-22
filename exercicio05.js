let codigos = [];
let indice = -1;

for(let i=0;i<=9;i++){
    codigos[i] = Number(prompt(`Digite o código ${i + 1}`));
}

let busca = Number(prompt("Qual código você deseja rastrear?: "));

for(let i=0;i<=codigos.length;i++){
    if(codigos[i] === busca){
        indice = i;
    }
}

if (indice !== -1) {
    console.log(`Código encontrado no índice ${indice}.`);
} else {
    console.log("Código não cadastrado.");
}

