var qtdePessoas =Number(prompt("Qtde de participantes da pesquisa: "));

var media=0;
var maiorIdade=0;
var menorIdade=0;
var qtdePessimo=0;
var qtdePositiva=0;
var qtdeHomem=0;
var qtdeMulher=0;

for(var i=1; i <= qtdePessoas; i++){
	var idade = Number(prompt("Pessoa " + i + ", informe idade: "));
	var sexo = prompt("Pessoa " + i + ", informe sexo, sendo (H)-homem, (M)-Mulher: ");
	var opiniao = prompt("Pessoa " + i + ", informe opinião, sendo ótimo=4, bom=3, regular=2, péssimo=1: ");
	
	media+=idade; //Soma todas as idades, p/ encontrar a media depois
	if(idade > maiorIdade){//Maior Idade
		maiorIdade = idade;
	}
	
	if(menorIdade == 0 || idade < menorIdade){//Menor Idade
		menorIdade = idade;
	}
	
	if(opiniao == 1){//OPINIÃO
		qtdePessimo+= 1;//Pega qtde de pessimos
	}else if(opiniao == 3 || opiniao == 4){
		qtdePositiva+=1
	}
	
	if(sexo == "H"){//Qtde de homens e mulheres
		qtdeHomem+=1;
	}else{
		qtdeMulher+=1;
	}
}

alert("Media de idades: " + parseInt(media/qtdePessoas) +
	"\nMais velha tem " + maiorIdade + " anos... E a mais nova tem " + menorIdade + " anos." +
	"\nClassificações como péssimo: " + qtdePessimo +
	"\nPorém, " + parseFloat((100*qtdePositiva)/qtdePessoas).toFixed(3) + "% das pessoas classificaram como 'ótimo' ou 'bom'." +
	"\nSendo estas: " + qtdeMulher + " mulher(es), e " + qtdeHomem + " homem(ns).");