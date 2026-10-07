const Ordenador = require("../src/Ordenador");

describe("bubbleSort - conjunto basico de caminos", () => {
  let ordenador;
  let camino;

  beforeEach(() => {
    ordenador = new Ordenador();
    camino = [];
  });

  afterEach(() => {
    ordenador = null;
    camino = null;
  });

  test("CP1: el bucle externo no se ejecuta", () => {
    const entrada = [5];

    const salida = ordenador.ordenar(entrada, camino);

    expect(salida).toEqual([5]);
    expect(camino.join("-")).toBe("N1-N2-N9");
  });

  test("CP3: el bucle interno se ejecuta sin intercambio", () => {
    const entrada = [1, 2];

    const salida = ordenador.ordenar(entrada, camino);

    expect(salida).toEqual([1, 2]);
    expect(camino.join("-")).toBe("N1-N2-N3-N4-N5-N7-N4-N8-N2-N9");
  });

  test("CP4: el bucle interno se ejecuta con intercambio", () => {
    const entrada = [2, 1];

    const salida = ordenador.ordenar(entrada, camino);

    expect(salida).toEqual([1, 2]);
    expect(camino.join("-")).toBe("N1-N2-N3-N4-N5-N6-N7-N4-N8-N2-N9");
  });

  test("CP2: el camino N1-N2-N3-N4-N8 es infactible", () => {
    const entrada = [2, 1];

    ordenador.ordenar(entrada, camino);

    const posN4 = camino.indexOf("N4");
    expect(camino[posN4 + 1]).toBe("N5");
    expect(camino[posN4 + 1]).not.toBe("N8");
  });
});

describe("bubbleSort - casos complementarios", () => {
  let ordenador;

  beforeEach(() => {
    ordenador = new Ordenador();
  });

  test("CP5: arreglo vacio", () => {
    expect(ordenador.ordenar([])).toEqual([]);
  });

  test("CP6: arreglo ya ordenado de tres elementos", () => {
    expect(ordenador.ordenar([1, 2, 3])).toEqual([1, 2, 3]);
  });

  test("CP7: arreglo desordenado de tres elementos", () => {
    expect(ordenador.ordenar([3, 1, 2])).toEqual([1, 2, 3]);
  });

  test("CP8: arreglo en orden inverso", () => {
    expect(ordenador.ordenar([5, 4, 3, 2, 1])).toEqual([1, 2, 3, 4, 5]);
  });

  test("CP9: valores negativos y repetidos", () => {
    expect(ordenador.ordenar([3, -1, 3, 0])).toEqual([-1, 0, 3, 3]);
  });
});
