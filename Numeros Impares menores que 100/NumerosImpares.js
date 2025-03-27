// O Desafio é fazer um programa que mostra todos os numeros impares menores que 100
// Creditos: https://github.com/giselle-ferreira/ExerciciosJavascriptResolvidos?tab=readme-ov-file#questões

//O programa explica para o usuário o que ele vai mostrar
console.log("Esses são todos os números ímpares menores que 100:")

//Criado um loop que repetirá o codigo e aumentará o contador até ele chegar no 100
for (let i = 1;i < 100; i++){
     if (i % 2 != 0){ //Se o numero do contador for impar (resto da divisão por 2 não for 0) mostra o número
        console.log(i)
     }//Se for, nada acontece e o loop se repete
}