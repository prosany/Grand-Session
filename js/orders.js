let cart = [];
let count = 0;
let newPrice = 0;
let tax = 0;
const localData = getLocalStorage("cart");
const localOrder = getLocalStorage("order");

function displayData(data) {
  const orderMessage = document.getElementById("order-message");
  if (localOrder.length > 0) {
    orderMessage.innerHTML = `<p class="text-xl text-center italic mb-6">Thank you so much for your order, Aro order koren.</p>`;
  } else {
    orderMessage.innerHTML = `<p class="text-xl text-center italic mb-6">Your Order list is empty. Dur miya order koren</p>`;
  }
  const cardContainer = document.getElementById("homepage-content");
  data.forEach((element) => {
    const { id, img, price, name } = element;
    const divContainer = document.createElement("div");
    divContainer.classList.add("card", "bg-base-100", "shadow-2xl", "p-4");
    divContainer.innerHTML = `
      <figure class="">
        <img
          src="${img}"
          alt="Shoes"
          class="rounded-lg w-full h-[300px]"
        />
      </figure>
  
      <div class="mt-[20px]">
        <div class="flex justify-between">
          <h2 class="card-title">${name}</h2>
          <div class="flex text-lg">
            <span class="mr-4"
              ><i class="fa-solid fa-heart text-slate-500"></i
            ></span>
            <span
              ><i class="fa-solid fa-square-minus text-red-700"></i
            ></span>
          </div>
        </div>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <h3 class="card-title">Price: ${price}</h3>
        <div class="mt-2 flex justify-between">
          <label
          onclick="handleModal('${id}')"
            for="my-modal-3"
            class="btn btn-outline btn-primary w-[45%] mx-auto flex justify-center items-center"
          >
            <i class="fa-solid fa-circle-info mr-2"></i> See Details
          </label>
  
          
        </div>
    </div>
      
      `;
    cardContainer.appendChild(divContainer);
  });
}

displayData(localOrder);

async function displayOrders() {
  const cartContainer = document.getElementById("cart-items-container");
  cartContainer.innerHTML = "";
  cart = localData;

  localData.forEach((data) => {
    const { id, name, price, img } = data;
    newPrice = newPrice - price;
    tex = newPrice * 0.1;

    const div = document.createElement("div");
    div.classList.add(
      "flex",
      "justify-between",
      "items-center",
      "p-2",
      "rounded-md",
      "mb-4",
      "cart-item-style"
    );
    div.innerHTML = `
  
    <img
      src="${img}"
      class="w-[15%]"
      alt=""
    />
    <div class="flex items-center justify-between w-[80%]">
      <h1 class="font-semibold">${name}</h1>
      <input
        type="text"
        class="border-2 border-green-800 w-10 text-center rounded-md"
        value="1"
        readonly
      />
      <span onclick="handleRemove('${id}')"
        ><i
          class="fa-sharp fa-solid fa-trash text-red-700 cursor-pointer text-xl"
        ></i
      ></span>
  
  </div>
    
    `;
    cartContainer.appendChild(div);
  });

  document.getElementById("badge-count").innerText = count;
  document.getElementById("product-count").innerText = count;
  document.getElementById("price").innerText = newPrice.toFixed(2);
  document.getElementById("tax-count").innerText = tax.toFixed(2);
  document.getElementById("total-price").innerText = (newPrice + tax).toFixed(
    2
  );
}

displayOrders();
