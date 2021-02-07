/* 
  Valeria Andrade
  Estructura de Datos
  Profesor: Roberto Di Michele
*/
class Stack {
  constructor() {
    this.element = [];
  }
  add(element) {
    this.element.push(element);
  }
  remove() {
    return this.element.pop();
  }
  show() {
    return this.element;
  }
  size() {
    return this.element.length;
  }
  nextToRemove() {
    return this.element[this.element.length - 1];
  }
}

const Navigation = new Stack();
const textWelcome =
  "Bienvenido! Si quieres parar el programa presione cualquier tecla, si quiere continuar presione el numero: 1";

for (let index = 0; prompt(textWelcome) === "1"; index++) {
  const tab = prompt(
    "Escriba su página a buscar, esta se almacenara en la Pila:"
  );
  Navigation.add(tab);
}
const textAlert = `
Número de páginas: ${Navigation.size()}.
Páginas visitadas: ${Navigation.show()}.
Se eliminara: ${Navigation.remove()}.
La proxima en eliminar sera: ${Navigation.nextToRemove()}.
Numero de Páginas restantes: ${Navigation.size()}.
Las páginas que quedan son: ${Navigation.show()}.
`;
alert(textAlert);
