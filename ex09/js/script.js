let nome=0;
let car;
let resultado
function posicao(nome1, car){
    if(car == 0){
        alert("Posicao de caractere invalido.");
        return;
    }
    if(car <= -1){
        alert("Posicao de caractere invalido.");
        return;
    }
    if(car > nome1.length){
        alert("Posicao de caractere invalido.");
        return;
    }
    return nome1.charAt(car-1);
}
nome=prompt('Digite seu nome completo: ',"");
car= prompt('Digite um numero: ',"");

resultado=posicao(nome,car);

alert("O numero digitado coresponde a caractere: "+ resultado);