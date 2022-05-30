const columns = document.getElementsByClassName('column');

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

function randomRgbValues() {
    let values = [];
    let x = 0;
    for(let i = 0; i < 3; i++) {
      x = Math.round(getRandomArbitrary(0, 255))
      values.push(x);
    }
    return values;
}

function randomHslValues() {
  return [Math.round(Math.random() * 360), Math.round(Math.random() * 100), Math.round(Math.random() * 100)]
}

function hslRandom() {
  let values = randomHslValues();
  return `hsl(${values[0]}, ${values[1]}%, ${values[2]}%)`;
}

function rgbConstructor(values) {
  return rgbColor = 'rgb(' + values[0] + ',' + values[1] + ',' + values[2] + ')';
}

function hexConsturctor(values) {
  return `#${values.map(x => x.toString(16)).join("").toUpperCase()}`
}

function complemValues(values) { // Take a column's colour and change return complementary;
  return values.map(x => 255 - x);
}

function brightness(values) {
  let coin = Math.round(Math.random());
  let increm = Math.round(Math.random() * 255);
  if (coin == 1) {
    values = values.map(x => Math.min(x + increm, 255));
  }
  else {
    values = values.map(x => Math.max(x - increm, 0));
  }
  return values;
}

let myColor = '';
let mainColorRgb = '';
let mainColorHex = '';

myColor = randomRgbValues();
mainColorRgb = 'rgb(' + myColor[0] + ',' + myColor[1] + ',' + myColor[2] + ')';
mainColorHex = `#${myColor.map(x => x.toString(16)).join("").toUpperCase()}`;

columns[0].style.backgroundColor = hexConsturctor(randomRgbValues());
console.log(columns[0].style.backgroundColor);

let secondColor = [];
let secondColorRgb = '';
let secondColorHex = '';
secondColor = myColor.map(x => 255 - x);
console.log(secondColor);
secondColorRgb = 'rgb(' + secondColor[0] + ',' + secondColor[1] + ',' + secondColor[2] + ')';
secondColorHex = `#${secondColor.map(x => x.toString(16)).join("").toUpperCase()}`;


columns[1].style.backgroundColor = secondColorHex;
console.log(columns[1].style.backgroundColor);
