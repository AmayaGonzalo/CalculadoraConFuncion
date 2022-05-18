let numero1: number;
let numero2: number;
let opcionMenu: number;
let resultado: number;

//funcion que pide los dos números y la opcion de la operacion a realizar
function pedirDatos() {
  let i: number;
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
//funcion para dibujar 40 guiones seguidos
function dibujarGuiones() {
  let i: number;
  let linea: string = "";
  for (i = 0; i < 40; i++) {
    linea = linea + "-";
  }
  console.log(linea);
}
//funcion para realizar los calculos
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

//aca se ejecuta el programa:
pedirDatos();
calculaResultado();
