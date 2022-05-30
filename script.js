const column = document.getElementsByClassName('column');

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

let myColor = '';
let mainColorRgb = '';
let mainColorHex = '';

function rgbConstructor(values) {
  return rgbColor = 'rgb(' + values[0] + ',' + values[1] + ',' + values[2] + ')';
}

function hexConsturctor(values) {
  return `#${values.map(x => x.toString(16)).join("").toUpperCase()}`
}

myColor = randomRgbValues();
mainColorRgb = 'rgb(' + myColor[0] + ',' + myColor[1] + ',' + myColor[2] + ')';
mainColorHex = `#${myColor.map(x => x.toString(16)).join("").toUpperCase()}`;

column[0].style.backgroundColor = mainColorHex;
console.log(column[0].style.backgroundColor);

let secondColor = [];
let secondColorRgb = '';
let secondColorHex = '';
secondColor = myColor.map(x => 255 - x);
console.log(secondColor);
secondColorRgb = 'rgb(' + secondColor[0] + ',' + secondColor[1] + ',' + secondColor[2] + ')';
secondColorHex = `#${secondColor.map(x => x.toString(16)).join("").toUpperCase()}`;


column[1].style.backgroundColor = secondColorHex;
console.log(column[1].style.backgroundColor);
