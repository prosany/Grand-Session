document.getElementById("complete-order").addEventListener("click", () => {
  const cart = getLocalStorage("cart");
  const orders = getLocalStorage("order");
  setLocalStorage("order", [...orders, ...cart]);
  setLocalStorage("cart", []);
  const cartContainer = document.getElementById("cart-items-container");
  cartContainer.innerHTML = "";
  document.getElementById("badge-count").innerText = 0;
  document.getElementById("product-count").innerText = 0;
  document.getElementById("price").innerText = "";
  document.getElementById("tax-count").innerText = "";
  document.getElementById("total-price").innerText = "";

  window.location.href = "/page/orders.html";
});
