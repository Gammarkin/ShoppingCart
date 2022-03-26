const localStorageSimulator = require("../mocks/localStorageSimulator");
const saveCartItems = require("../helpers/saveCartItems");

localStorageSimulator("setItem");

describe("4 - Teste a função saveCartItems", () => {
  // implemente seus testes aqui
  it("expect localStorage with arg <ol><li>Item</li></ol> to call localStorage.setItem", () => {
    const section = document.createElement("section");
    section.innerHTML = "<ol><li>Item</li></ol>";
    saveCartItems(section.firstChild);
    expect(localStorage.setItem).toHaveBeenCalled();
  });
  it("expect localStorage.setItem to be called with two params", () => {
    const section = document.createElement("section");
    section.innerHTML = "<ol><li>Item</li></ol>";
    saveCartItems(section.firstChild);
    expect(localStorage.setItem).toHaveBeenCalledWith("cartItems", "{}");
  });
});
