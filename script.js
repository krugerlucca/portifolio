function calcularIdade(dataNascimento) {
  var hoje = new Date();
  var nascimento = new Date(dataNascimento);
  var idade = hoje.getFullYear() - nascimento.getFullYear();
  var mes = hoje.getMonth() - nascimento.getMonth();
  if (mes < 0 || (mes === 0 && hoje.getDate() < nascimento.getDate())) {
    idade--;
  }
  return idade;
}
var idade = calcularIdade('2005-07-31');

function txt_idade(){
	document.getElementById("txt_idade").innerHTML =idade+" anos";
}
