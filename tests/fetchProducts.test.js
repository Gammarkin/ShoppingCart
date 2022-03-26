require("../mocks/fetchSimulator");
const { fetchProducts } = require("../helpers/fetchProducts");
const computadorSearch = require("../mocks/search");

describe("1 - Teste a função fecthProducts", () => {
  // implemente seus testes aqui
  it("test if fetchProducts is a fun", () => {
    expect(typeof fetchProducts).toBe("function");
  });
  it("test if fetch is called when the fun is also called", async () => {
    await fetchProducts("computador");
    expect(fetch).toHaveBeenCalled();
  });
  it("test if when the fun is called, it is called with the rigth endpoint", async () => {
    const url = "https://api.mercadolibre.com/sites/MLB/search?q=computador";

    await fetchProducts("computador");
    expect(fetch).toHaveBeenCalledWith(url);
  });
  it("expect the return of fetchProducts to be equal to computadorSearch", async () => {
    const result = await fetchProducts("computador");
    expect(result).toEqual(computadorSearch);
  });
  it("test if the fun does not have a param, an error is thrown", async () => {
    expect(await fetchProducts()).toEqual(new Error("You must provide an url"));
  });
});
