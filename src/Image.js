
let imgArray = new Array();

function imageCache(base, firstNum, lastNum) {
  let img;
  for (let i = 0; i < 40; i++) {
    img = new Image;
    img.src = `Images/${i + 1}.png`;
    imgArray.push(img);
  }
}

imageCache()

module.exports = imgArray;

