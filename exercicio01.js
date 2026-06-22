let caixas = [];
let soma = 0;
for(let i=0;i<=7;i++){
    caixas[i] = Number(prompt(`Digite a quantidade de caixas armazenadas do produto ${i + 1}`));
    soma += caixas[i];
}
console.log(`Vetor de caixas: ${caixas}`);
console.log(`A quantidade total de caixas no estoque é de ${soma} caixas.`);