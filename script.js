let products = [
  {
    name: "Waffle with Berries",
    dessertType: "Waffle",
    price: 6.5,
    image: "./assets/images/image-waffle-desktop.jpg",
  },
  {
    name: "Vanilla Bean Crème Brûlée",
    dessertType: "Crème Brûlée",
    price: 7.0,
    image: "./assets/images/image-creme-brulee-desktop.jpg",
  },
  {
    name: "Macaron Mix of Five",
    dessertType: "Macaron",
    price: 8.0,
    image: "./assets/images/image-macaron-desktop.jpg",
  },
  {
    name: "Classic Tiramisu",
    dessertType: "Waffle",
    price: 5.5,
    image: "./assets/images/image-tiramisu-desktop.jpg",
  },
  {
    name: "Pistachio Baklava",
    dessertType: "Baklava",
    price: 4.0,
    image: "./assets/images/image-baklava-desktop.jpg",
  },
  {
    name: "Lemon Meringue Pie",
    dessertType: "Pie",
    price: 5.0,
    image: "./assets/images/image-meringue-desktop.jpg",
  },
  {
    name: "Red Velvet Cake",
    dessertType: "Cake",
    price: 4.5,
    image: "./assets/images/image-cake-desktop.jpg",
  },
  {
    name: "Salted Caramel Brownie",
    dessertType: "Brownie",
    price: 5.5,
    image: "./assets/images/image-brownie-desktop.jpg",
  },
  {
    name: "Vanilla Panna Cotta",
    dessertType: "Panna Cotta",
    price: 6.5,
    image: "./assets/images/image-panna-cotta-desktop.jpg",
  },
];

document.addEventListener("DOMContentLoaded", () => {
  let dessertContainer = document.querySelector(".dessertItems");

  const createDessertItem = (product) => {
    let dessertDiv = document.createElement("div");
    dessertDiv.classList.add("dessert");

    let imageDiv = document.createElement("div");
    imageDiv.classList.add("image");
    let img = document.createElement("img");
    img.src = product.image;
    img.alt = product.name;

    let addToCartP = document.createElement("p");
    addToCartP.classList.add("cartButton");
    let icon = document.createElement("i");
    icon.className = "fa-solid fa-cart-shopping";
    addToCartP.appendChild(icon);

    addToCartP.appendChild(document.createTextNode("Add To Cart"));

    imageDiv.appendChild(img);
    imageDiv.appendChild(addToCartP);

    let contentDiv = document.createElement("div");
    contentDiv.classList.add("content");
    let dessertTypeP = document.createElement("p");
    dessertTypeP.classList.add("dessertType");
    dessertTypeP.textContent = product.dessertType;
    let dessertNameP = document.createElement("p");
    dessertNameP.classList.add("dessertName");
    dessertNameP.textContent = product.name;
    let dessertPriceP = document.createElement("p");
    dessertPriceP.classList.add("dessertPrice");
    dessertPriceP.textContent = `$${product.price.toFixed(2)}`;
    contentDiv.appendChild(dessertTypeP);
    contentDiv.appendChild(dessertNameP);
    contentDiv.appendChild(dessertPriceP);

    dessertDiv.appendChild(imageDiv);
    dessertDiv.appendChild(contentDiv);

    return dessertDiv;
  };

  products.forEach((product) => {
    let dessertItem = createDessertItem(product);
    dessertContainer.appendChild(dessertItem);
  });
});
