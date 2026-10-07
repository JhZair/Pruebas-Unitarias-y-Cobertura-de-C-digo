class Ordenador {
  ordenar(entrada, camino = []) {
    const vet = [0, ...entrada];
    let aux;
    let i = vet.length - 1;

    camino.push("N1");
    while (true) {
      camino.push("N2");
      if (!(i >= 2)) break;
      camino.push("N3");
      let j = 1;
      while (true) {
        camino.push("N4");
        if (!(j <= i - 1)) break;
        camino.push("N5");
        if (vet[j] > vet[j + 1]) {
          camino.push("N6");
          aux = vet[j];
          vet[j] = vet[j + 1];
          vet[j + 1] = aux;
        }
        camino.push("N7");
        j++;
      }
      camino.push("N8");
      i--;
    }
    camino.push("N9");

    return vet.slice(1);
  }
}

module.exports = Ordenador;
