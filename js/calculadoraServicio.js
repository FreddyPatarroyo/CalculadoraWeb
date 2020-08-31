function sumar() {
  var numero1= parseFloat(document.getElementById('numero1').value);
  var numero2= parseFloat(document.getElementById('numero2').value);

  document.getElementById('resultado').value = (numero1+numero2);
}

function restar() {
  var numero1= parseFloat(document.getElementById('numero1').value);
  var numero2= parseFloat(document.getElementById('numero2').value);

  document.getElementById('resultado').value = (numero1-numero2);
}

function dividir() {
  var numero1= parseFloat(document.getElementById('numero1').value);
  var numero2= parseFloat(document.getElementById('numero2').value);

  document.getElementById('resultado').value = (numero1/numero2);
}

function multiplicar() {
  var numero1= parseFloat(document.getElementById('numero1').value);
  var numero2= parseFloat(document.getElementById('numero2').value);

  document.getElementById('resultado').value = (numero1*numero2);
}

function mayor() {
  var numero1= parseFloat(document.getElementById('numero1').value);
  var numero2= parseFloat(document.getElementById('numero2').value);

  if (numero1>numero2) {
    document.getElementById('resultado').value = (numero1);
  }else {
    document.getElementById('resultado').value = (numero2);
  }
}

function menor() {
  var numero1= parseFloat(document.getElementById('numero1').value);
  var numero2= parseFloat(document.getElementById('numero2').value);

  if (numero1<numero2) {
    document.getElementById('resultado').value = (numero1);
  }else {
    document.getElementById('resultado').value = (numero2);
  }
}
