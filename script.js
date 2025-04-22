function calcular() {
  var dbp = document.getElementById('dbp').value;
  var cc = document.getElementById('cc').value;
  var ca = document.getElementById('ca').value;
  var cf = document.getElementById('cf').value;

  if (cc == "" || ca == "" || cf == "") {
    document.getElementById('resultado').innerText = "Preencha todos os campos obrigatórios.";
    return;
  }

  cc = Number(cc);
  ca = Number(ca);
  cf = Number(cf);
  dbp = Number(dbp);

  var peso = 0;

  if (dbp > 0) {
    // Fórmula Hadlock 4 parâmetros
    var log10peso = 1.3596 + (0.0064 * cc) + (0.0424 * ca) + (0.174 * cf) + (0.00061 * cc * cf) - (0.00386 * ca * cf);
    peso = Math.pow(10, log10peso);
  } else {
    // Fórmula Hadlock 3 parâmetros (sem DBP)
    var log10peso = 1.335 - (0.0034 * cc) + (0.0316 * ca) + (0.0457 * cf);
    peso = Math.pow(10, log10peso);
  }

  if (isNaN(peso) || peso < 0 || peso > 10000) {
    document.getElementById('resultado').innerText = "Dados inválidos. Verifique os valores.";
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
