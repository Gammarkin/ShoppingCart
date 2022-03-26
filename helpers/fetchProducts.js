const fetchProducts = async ($QUERY) => {
  // seu código aqui
  try {
    const url = `https://api.mercadolibre.com/sites/MLB/search?q=${$QUERY}`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (e) {
    return e;
  }
};

if (typeof module !== "undefined") {
  module.exports = {
    fetchProducts,
  };
}
