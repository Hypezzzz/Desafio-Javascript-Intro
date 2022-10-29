const totalButton = document.querySelector("#calc-button");
const quantity = document.querySelector("#input-amount");
const colorProduct = document.querySelector("#input-color");
const priceProduct = document.querySelector("#prod-price");
const totalPrice = document.querySelector("#prod-total-price");
const totalAmount = document.querySelector("#prod-amount");
const colorFinal = document.querySelector("#prod-color");

totalButton.addEventListener("click", () => {
  const amount = Number(quantity.value);
  const price = Number(priceProduct.textContent);
  const total = amount * price;

  totalPrice.textContent = total;
  totalAmount.textContent = amount;

  const color = colorProduct.value;

  colorFinal.style.backgroundColor = color;
});
