const dataAtual=  new Date();

const horaAtual= dataAtual.getHours();

let oi= (function(){
    if(horaAtual > 0 && horaAtual < 12){
        alert("Bom dia, são " + horaAtual +" horas")}
    if(horaAtual >= 12 && horaAtual < 19){
        alert("Bom Tarde, são " + horaAtual +" horas" )}
    if(horaAtual >= 19){
        alert("Bom Noite, são " + horaAtual +" horas")}
})();