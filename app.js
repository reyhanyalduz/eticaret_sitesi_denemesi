

const wrapper = document.querySelector(".sliderWrapper");

const menuItems = documents.querySelectorAll(".menuItem");

const products = [
    {
        id: 1,
        title: "Iphone 14",
        price: 1000,
        colors: [
            {
                code: "yellow",
                img: "./imgages/iphone14_product.jpg",
            },
            {
                code: "white",
                img: "https://productimages.hepsiburada.net/s/376/550/110000393677091.jpg/format:webp"
            },
        ],
    },

];

let choosenProduct = products[0]

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductCapacities = document.querySelectorAll(".capacity");

menuItems.forEach((item, index) => {
    item.addEventListener("click", () => {
        wrapper.style.transform = `translateX(${-100 * index}vw)`;

        choosenProduct = products[index];

        currentProductTitle.textContent = choosenProduct.title;
        currentProductPrice.textContent = "$" + choosenProduct.price;
        currentProductImg.src = choosenProduct.colors[0].img;

        currentProductColors.forEach((color, index) => {
            color.style.backgroundColor = choosenProduct.colors[index].code;
        })
    });
});

currentProductColors.forEach((color, index) => {
    color.addEventListener("click", () => {
        currentProductImg.src = choosenProduct.colors[index].img;
    });
});


currentProductCapacities.forEach((capacity, index) => {
    capacity.addEventListener("click", () => {
      currentProductCapacities.forEach((capacity) => {
        capacity.style.backgroundColor = "white";
        capacity.style.color = "black";
      });
      capacity.style.backgroundColor = "black";
      capacity.style.color = "white";
    });
  });

  const productButton = document.querySelectorAll(".productButton");
  const payment = docment.querySelector("payment");
  const close= document.querySelector(".close");

  productButton.addEventListener("click",()=>{
    payment.style.display="flex"
  });

  close.addEventListener("click",()=>{
    payment.style.display="none"
  });