//validação após ultimo campo preenchido 
document.getElementById("salvar").disabled = true;

document.getElementById("cidade").addEventListener("input", function(event){

    var conteudo = document.getElementById("cidade").value;

    if (conteudo !== null && conteudo !== '') {

      document.getElementById("salvar").disabled = false;
    } else {

      document.getElementById("salvar").disabled = true;
    }
});

//mascara celular
function mascara(o,f){
  v_obj=o
  v_fun=f
  setTimeout("execmascara()",1)
}
function execmascara(){
  v_obj.value=v_fun(v_obj.value)
}
function mtel(v){
  v=v.replace(/\D/g,""); //deixa apenas numeros
  v=v.replace(/^(\d{2})(\d)/g,"($1) $2"); //parenteses nos 2 primeiros digitos
  v=v.replace(/(\d)(\d{4})$/,"$1-$2"); //hifen entre os 4 ultimos digitos
  return v;
}
function id( celular ){
return document.getElementById( celular );
}
window.onload = function(){
id('celular').onkeyup = function(){
  mascara( this, mtel );
}
}