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
    //Arrange
    const entrada = [5];
    const salidaEsperada = [5];
    const caminoEsperado = "N1-N2-N9";

    //Act
    const salida = ordenador.ordenar(entrada, camino);

    //Assert
    expect(salida).toEqual(salidaEsperada);
    expect(camino.join("-")).toBe(caminoEsperado);
  });

  test("CP2: el camino N1-N2-N3-N4-N8 es infactible", () => {
    //Arrange
    const entrada = [2, 1];

    //Act
    ordenador.ordenar(entrada, camino);

    //Assert
    const primerN4 = camino.indexOf("N4");
    expect(camino[primerN4 + 1]).toBe("N5");
    expect(camino[primerN4 + 1]).not.toBe("N8");
  });

  test("CP3: el bucle interno se ejecuta sin intercambio", () => {
    //Arrange
    const entrada = [1, 2];
    const salidaEsperada = [1, 2];
    const caminoEsperado = "N1-N2-N3-N4-N5-N7-N4-N8-N2-N9";

    //Act
    const salida = ordenador.ordenar(entrada, camino);

    //Assert
    expect(salida).toEqual(salidaEsperada);
    expect(camino.join("-")).toBe(caminoEsperado);
  });

  test("CP4: el bucle interno se ejecuta con intercambio", () => {
    //Arrange
    const entrada = [2, 1];
    const salidaEsperada = [1, 2];
    const caminoEsperado = "N1-N2-N3-N4-N5-N6-N7-N4-N8-N2-N9";

    //Act
    const salida = ordenador.ordenar(entrada, camino);

    //Assert
    expect(salida).toEqual(salidaEsperada);
    expect(camino.join("-")).toBe(caminoEsperado);
  });
});

describe("bubbleSort - casos complementarios", () => {
  let ordenador;

  beforeEach(() => {
    ordenador = new Ordenador();
  });

  afterEach(() => {
    ordenador = null;
  });

  test("CP5: arreglo vacio", () => {
    //Arrange
    const entrada = [];
    const salidaEsperada = [];

    //Act
    const salida = ordenador.ordenar(entrada);

    //Assert
    expect(salida).toEqual(salidaEsperada);
  });

  test("CP6: arreglo ya ordenado de tres elementos", () => {
    //Arrange
    const entrada = [1, 2, 3];
    const salidaEsperada = [1, 2, 3];

    //Act
    const salida = ordenador.ordenar(entrada);

    //Assert
    expect(salida).toEqual(salidaEsperada);
  });

  test("CP7: arreglo desordenado de tres elementos", () => {
    // Arrange
    const entrada = [3, 1, 2];
    const salidaEsperada = [1, 2, 3];

    //Act
    const salida = ordenador.ordenar(entrada);

    //Assert
    expect(salida).toEqual(salidaEsperada);
  });

  test("CP8: arreglo en orden inverso", () => {
    //Arrange
    const entrada = [5, 4, 3, 2, 1];
    const salidaEsperada = [1, 2, 3, 4, 5];

    //Act
    const salida = ordenador.ordenar(entrada);

    //Assert
    expect(salida).toEqual(salidaEsperada);
  });

  test("CP9: valores negativos y repetidos", () => {
    //Arrange
    const entrada = [3, -1, 3, 0];
    const salidaEsperada = [-1, 0, 3, 3];

    //Act
    const salida = ordenador.ordenar(entrada);

    //Assert
    expect(salida).toEqual(salidaEsperada);
  });
});
