let temperaturas = [];
let maior = 0;
let dia = 0;

for(let i=0;i<=9;i++){
    temperaturas[i] = Number(prompt(`Digite a temperatura do dia ${i + 1}`));
    
    if(temperaturas[i]>maior){
        maior = temperaturas[i]
        dia = i + 1
    }
}
console.log(`A maior temperatura registrada foi de ${maior}°C, no dia ${dia}`);
