var escolhaUser;
var funcNome = function(escolha){return escolha==0 ? "Pedra" : escolha==1 ? "Papel" : "Tesoura"};
	
escolhaUser=prompt("Digite a sua escolha, sendo:"+
					"\n0 para 'Pedra'"+
					"\n1 para 'Papel' e "+
					"\n2 para 'Tesoura'");

var escolhaMaq = Math.random().toFixed(2);
alert("Número random da máquina: "+escolhaMaq+
		"\nREGRA: "+
			"\nescolhaMaq <= 0.33 : Pedra"+
			"\n0.33 < escolhaMaq < 0.66 : Papel"+
			"\nescolhaMaq >= 0.66 : Tesoura");
escolhaMaq = escolhaMaq<=0.33 ? 0 : escolhaMaq >= 0.66 ? 2 : 1;

var resultado;
if(escolhaMaq==escolhaUser){
	resultado = "Empatou";
}else{
	switch (escolhaMaq) {
	  case 0:
		resultado = escolhaUser==2?"Máquina ganhou":"User ganhou";
		break;
	  case 1:
		resultado = escolhaUser==0?"Máquina ganhou":"User ganhou";
		break;
	  case 2:
		resultado = escolhaUser==1?"Máquina ganhou":"User ganhou";
		break;
	}
	alert("Usuário: "+escolhaUser+" - "+funcNome(escolhaUser)+
			"\nMáquina: "+escolhaMaq+" - "+ funcNome(escolhaMaq)+
			"\nPortanto... "+resultado);
}