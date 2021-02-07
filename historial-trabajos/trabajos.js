/* 
  Valeria Andrade
  Estructura de datos
  Profesor: Roberto Di Michele
*/
class Stack {
  constructor() {
    this.stack = [];
  }
  add(workObject) {
    this.stack.push(workObject);
  }
  remove() {
    return this.stack.pop();
  }
  show() {
    return this.stack;
  }
  length() {
    return this.stack.length;
  }
  nextToRemove() {
    return this.stack[this.stack.length - 1];
  }
}

const Works = new Stack();
const textWelcome =
  "Bienvenido! Si quieres parar el programa presione cualquier tecla, si quieres continuar presione el numero: 1";

for (let index = 0; prompt(textWelcome) === "1"; index++) {
  const workObject = {};
  workObject.fechaInicio = prompt("Ingrese la fecha de inicio del trabajo:");
  workObject.cedula = prompt(
    "Ingresa la cédula de la persona que realizo el trabajo:"
  );
  workObject.fechaFinal = prompt(
    "Ingrese la fecha de finalización del trabajo:"
  );
  Works.add(workObject);
}
const result = `
Número de trabajos: ${(JSON.stringify(Works.length()), undefined, 2)}.
Trabajos realizados: ${JSON.stringify(Works.show(), undefined, 2)}.
El trabajo a eliminar: ${JSON.stringify(Works.remove(), undefined, 2)}.
El proximo trabajo en eliminar sera: ${JSON.stringify(
  Works.nextToRemove(),
  undefined,
  2
)}.
Número de Trabajos restantes: ${Works.length()}.
Los trabajos que quedan son: ${JSON.stringify(Works.show(), undefined, 2)}.
`;
console.log(result);
