let notas = [];
let soma = 0;
let media;
let cont = 0;

for(let i=0;i<=4;i++){
    notas[i] = Number(prompt(`Digite a nota do aluno ${i+1}`));
    
    soma += notas[i];
}

media = soma/5;

for(let i=0;i<=4;i++){
    if(notas[i] > media){
        cont++;
    }
}

console.log (`Média = ${media}`)
console.log (`${cont} alunos conseguiram ficar acima da media.`)
