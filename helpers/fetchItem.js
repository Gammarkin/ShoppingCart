const fetchItem = async ($ItemID) => {
  // seu código aqui
  try {
    const url = `https://api.mercadolibre.com/items/${$ItemID}`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (e) {
    return e;
  }
};

if (typeof module !== "undefined") {
  module.exports = {
    fetchItem,
  };
}
