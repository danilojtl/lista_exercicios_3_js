let nome;
let posicao
function replaceAll(nomec, esp, substituto){
     posicao = nomec.indexOf(esp);
    while (posicao > -1){
		nomec = nomec.replace(esp, substituto);
		posicao = nomec.indexOf(esp);
	}
    return (nomec);
}

nome=prompt('Informe seu nome completo: ',"");
nomeSE=replaceAll(nome," ","");

alert("Seu nome possui " + nome.length + " caracteres." + " Seu nome possui " + nomeSE.length + " letras.")