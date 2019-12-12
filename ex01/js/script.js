let  notas=0;
let  media=0;
let soma=0;
var  i=0; 
while(notas!= 'FIM'){
	notas = prompt('Qual sua nota?').toUpperCase();
	if(notas != 'FIM')  { 
		soma += Number(notas);
		i++;
	}		
}
 media=soma/i;
alert('media '+ media.toFixed(2));