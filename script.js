const cart = document.querySelector(".cart__items");

function createProductImageElement(imageSource) {
  const img = document.createElement("img");
  img.className = "item__image";
  img.src = imageSource;
  return img;
}

function createLoadingScreen() {
  const span = document.createElement("span");
  span.className = "loading";
  span.innerText = "loading...";

  cart.appendChild(span);
}

function removeLoadingScreen() {
  const loading = document.querySelector(".loading");
  loading.remove();
}

function createCustomElement(element, className, innerText) {
  const e = document.createElement(element);
  e.className = className;
  e.innerText = innerText;
  return e;
}

function createProductItemElement({ sku, name, image }) {
  const section = document.createElement("section");
  section.className = "item";

  section.appendChild(createCustomElement("span", "item__sku", sku));
  section.appendChild(createCustomElement("span", "item__title", name));
  section.appendChild(createProductImageElement(image));
  section.appendChild(
    createCustomElement("button", "item__add", "Adicionar ao carrinho!")
  );

  return section;
}

function getSkuFromProductItem(item) {
  return item.querySelector("span.item__sku").innerText;
}

const totalPrice = () => {
  const cartItems = document.querySelectorAll(".cart__items li");
  let total = 0.0;
  cartItems.forEach((item) => {
    const price = item.innerText.split("PRICE: $")[1];
    total += parseFloat(price);
  });
  total = Math.round(total * 100) / 100;
  return total;
};

const displayPrice = () => {
  p = document.querySelector(".total-price");
  p.innerText = totalPrice();
};

function cartItemClickListener() {
  // coloque seu código aqui
  const cartAll = document.querySelectorAll(".cart__items");
  cartAll.forEach((item) => {
    item.addEventListener("click", () => {
      this.remove();
      displayPrice();
    });
    saveCartItems(cartAll);
  });
}

function createCartItemElement({ sku, name, salePrice }) {
  const li = document.createElement("li");
  li.className = "cart__item";
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener("click", cartItemClickListener);
  return li;
}

const appendProduct = async (product) => {
  createLoadingScreen();
  const items = document.querySelector(".items");
  const products = await fetchProducts(product);
  const { results } = products;
  results.forEach((e) => {
    const pageProduct = { sku: e.id, name: e.title, image: e.thumbnail };
    items.append(createProductItemElement(pageProduct));
  });
  const itemAdd = document.querySelectorAll(".item__add");
  itemAdd.forEach((button) => {
    button.addEventListener("click", () => {
      const productP = results.find(
        (e) => e.id === getSkuFromProductItem(button.parentElement)
      );
      const productLabels = {
        sku: productP.id,
        name: productP.title,
        salePrice: productP.price,
      };
      cart.append(createCartItemElement(productLabels));
      displayPrice();
    });
  });
  removeLoadingScreen();
};

const clearButton = () => {
  const emptyCart = document.querySelector(".empty-cart");
  emptyCart.addEventListener("click", () => {
    cart.innerHTML = "";
    displayPrice();
  });
};

window.onload = () => {
  appendProduct("computador");
  clearButton();
};
