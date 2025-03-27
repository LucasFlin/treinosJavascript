// O Desafio é fazer um programa que mostra todos os numeros impares menores que 100
// Creditos: https://github.com/giselle-ferreira/ExerciciosJavascriptResolvidos?tab=readme-ov-file#questões

console.log("Esses são todos os números ímpares menores que 100:")

for (let i = 1;i < 100; i++){
     if (i % 2 != 0){
        console.log(i)
     }
}