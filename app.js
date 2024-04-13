const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
  {
    id: 1,
    title: "Ktm jeans",
    price: 130,
    colors: [
      {
        code: "black",
        img: "./img/black.jpg",
      },
      {
        code: "lightblue",
        img: "./img/blue.jpg",
      },
    ],
  },
  {
    id: 2,
    title: "Shirt",
    price: 120,
    colors: [
      {
        code: "white",
        img: "./img/white.jpg",
      },
      {
        code: "green",
        img: "./img/green.jpg",
        
      },
    ],
  },
  {
    id: 3,
    title: "Coat and pant",
    price: 200,
    colors: [
      {
        code: "lightgray",
        img: "./img/gray.jpg",
      },
      {
        code: "green",
        img: "./img/green1.jpg",
      },
    ],
  },
  {
    id: 4,
    title: "ladies",
    price: 160,
    colors: [
      {
        code: "black",
        img: "./img/black1.jpg",
      },
      {
        code: "pink",
        img: "./img/pink.jpg",
      },
    ],
  },
  {
    id: 5,
    title: "Baby",
    price: 75,
    colors: [
      {
        code: "white",
        img: "./img/white1.jpg",
      },
      {
        code: "black",
        img: "./img/black3.jpg",
      },
    ],
  },
];

let choosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    //change the current slide
    wrapper.style.transform = `translateX(${-100 * index}vw)`;

    //change the choosen product
    choosenProduct = products[index];

    //change texts of currentProduct
    currentProductTitle.textContent = choosenProduct.title;
    currentProductPrice.textContent = "$" + choosenProduct.price;
    currentProductImg.src = choosenProduct.colors[0].img;

    //assing new colors
    currentProductColors.forEach((color, index) => {
      color.style.backgroundColor = choosenProduct.colors[index].code;
    });
  });
});

currentProductColors.forEach((color, index) => {
  color.addEventListener("click", () => {
    currentProductImg.src = choosenProduct.colors[index].img;
  });
});

currentProductSizes.forEach((size, index) => {
  size.addEventListener("click", () => {
    currentProductSizes.forEach((size) => {
      size.style.backgroundColor = "white";
      size.style.color = "black";
    });
    size.style.backgroundColor = "black";
    size.style.color = "white";
  });
});

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", () => {
  payment.style.display = "flex";
});

close.addEventListener("click", () => {
  payment.style.display = "none";
});
