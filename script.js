const column = document.getElementsByClassName('column');

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

function randomColor() {
    let color = [];
    let x = 0;
    for(let i = 0; i < 3; i++) {
      x = Math.round(getRandomArbitrary(0, 255))
      color.push(x);
    }
    return color;
}
column[0].style.backgroundColor = 'rgb(' + randomColor()[0] + ',' + randomColor()[1] + ',' + randomColor()[2] + ')';
console.log(column[0].style.backgroundColor);

let mainColorRgb = '';
mainColorRgb = 'rgb(' + myColor[0] + ',' + myColor[1] + ',' + myColor[2] + ')';

myColor = randomColor();

// column[0].style.backgroundColor = 'rgb(' + [color].join(',') + ')';

