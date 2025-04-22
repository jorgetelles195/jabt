function calcular() {
  var dbp = document.getElementById('dbp').value;
  var cc = document.getElementById('cc').value;
  var ca = document.getElementById('ca').value;
  var cf = document.getElementById('cf').value;

  cc = parseFloat(cc);
  ca = parseFloat(ca);
  cf = parseFloat(cf);

  if (isNaN(cc) || isNaN(ca) || isNaN(cf) || cc <= 0 || ca <= 0 || cf <= 0) {
    document.getElementById('resultado').innerText = "Preencha todos os campos corretamente.";
    return;
  }

  var log10peso = 1.326 - (0.00326 * cf * ca) + (0.0107 * cc) + (0.0438 * cf) + (0.158 * ca);
  var peso = Math.pow(10, log10peso);

  if (isNaN(peso) || peso <= 0 || peso > 10000) {
    document.getElementById('resultado').innerText = "Valores inválidos. Verifique as medidas.";
  } else {
    document.getElementById('resultado').innerText = "Peso Fetal Estimado: " + peso.toFixed(0) + " g";
  }
}

function limpar() {
  document.getElementById('dbp').value = "";
  document.getElementById('cc').value = "";
  document.getElementById('ca').value = "";
  document.getElementById('cf').value = "";
  document.getElementById('resultado').innerText = "";
}
