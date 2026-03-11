const imgs = ["1.jpeg", "2.jpeg", "3.jpeg", "4.jpeg", "0.jpeg"];

const bgImg = document.createElement("img");

const selectImg = imgs[Math.floor(Math.random() * imgs.length)];

bgImg.src = `img/${selectImg}`;
document.body.appendChild(bgImg);
