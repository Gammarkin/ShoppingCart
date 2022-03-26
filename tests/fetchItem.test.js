require("../mocks/fetchSimulator");
const { fetchItem } = require("../helpers/fetchItem");
const item = require("../mocks/item");

describe("2 - Teste a função fecthItem", () => {
  // implemente seus testes aqui
  it("test if fetchItem is a fun", () => {
    expect(typeof fetchItem).toBe("function");
  });
  it("test if fetch is called when the fun is also called", async () => {
    await fetchItem("MLB1615760527");
    expect(fetch).toHaveBeenCalled();
  });
  it("test if when the fun is kalled, it has the rigth endpoint", async () => {
    const url = "https://api.mercadolibre.com/items/MLB1615760527";

    await fetchItem("MLB1615760527");
    expect(fetch).toHaveBeenCalledWith(url);
  });
  it("test if the return of the fun is the rigth one", async () => {
    expect(await fetchItem("MLB1615760527")).toEqual(item);
  });
  it("test if when the fun has no args, it throws an err", async () => {
    expect(await fetchItem()).toEqual(new Error("You must provide an url"));
  });
});
