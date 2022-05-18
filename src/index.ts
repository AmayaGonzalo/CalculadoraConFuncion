let numero1: number;
let numero2: number;
let opcionMenu: number;
let resultado: number;

function pedirDatos() {
  let i: number; //pide los dos números y la opcion de la operacion a realizar
  for (i = 0; i <= 3; i++) {
    if (i === 1) {
      numero1 = Number(prompt("Ingrese el " + i + "er número: "));
    } else if (i === 2) {
      numero2 = Number(prompt("Ingrese el " + i + "do número: "));
    } else if (i === 3) {
      opcionMenu = Number(
        prompt(
          'Ingrese "1" para sumar, "2" para restar, cualquier tecla para salir'
        )
      );
    } else {
    }
  }
}
function dibujarGuiones() {
  let i: number;
  let linea: string = "";
  for (i = 0; i < 40; i++) {
    linea = linea + "-";
  }
  console.log(linea);
}

function calculaResultado() {
  if (opcionMenu === 1) {
    resultado = numero1 + numero2;
  } else if (opcionMenu === 2) {
    resultado = numero1 - numero2;
  } else {
  }

  dibujarGuiones();
  console.log("El resultado de la operación es: " + resultado);
  dibujarGuiones();
}
pedirDatos();
calculaResultado();
