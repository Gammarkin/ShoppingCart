const localStorageSimulator = require("../mocks/localStorageSimulator");
const getSavedCartItems = require("../helpers/getSavedCartItems");

localStorageSimulator("getItem");

describe("4 - Teste a função getSavedCartItems", () => {
  // implemente seus testes aqui
  it("expects getSavedcartItem to call localStorage.getItem", () => {
    getSavedCartItems();
    expect(localStorage.getItem).toHaveBeenCalled();
  });
  it("expeCts getSavedCartItem to be Called with the param cartItems", () => {
    getSavedCartItems();
    expect(localStorage.getItem).toHaveBeenCalledWith("cartItems");
  });
});
