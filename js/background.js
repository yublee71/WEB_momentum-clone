const imgs = ["0.jpg", "1.jpg", "2.jpg", "3.jpg"];
const randomImg = imgs[Math.floor(Math.random() * imgs.length)];

// const bgImg = document.createElement("img");
// bgImg.src = `img/${randomImg}`;
document.body.style.backgroundImage = `url(img/${randomImg})`;
