let alunos = [];

for(let i=0;i<=5;i++){
    alunos[i] = prompt(`Digite o nome do aluno ${i + 1}: `);
}
for(i = alunos.length - 1;i>=0;i--){
    console.log (alunos[i])
}