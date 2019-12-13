var data;

data= prompt('informe uma data (DD/MM/AAAA);')

document.write("data: dia " + data.substring(0,2) +  " mes "+ data.substring(3,5) + " ano " + data.substring(6,10));
