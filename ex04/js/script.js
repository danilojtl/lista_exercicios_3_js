let idades = 0;
let maior = 0;
let menor=0
while (idades != 'FIM'){
    idades= prompt ('Digite a idade:' ).toUpperCase();
    if(idades != 'FIM'){
        if(idades >= 18){
            maior++;
        }
        else{
            menor++;
        }   
    }
}
alert('Menores de Idade: '+ menor +  ' Maiores de Idade: '+ maior );