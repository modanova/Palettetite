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

let mainColorRgb = 'black';

myColor = randomColor();
mainColorRgb = 'rgb(' + myColor[0] + ',' + myColor[1] + ',' + myColor[2] + ')';
mainColorHex = `#${myColor.map(x => x.toString(16)).join("").toUpperCase()}`;

column[0].style.backgroundColor = mainColorHex;
console.log(column[0].style.backgroundColor);

// column[0].style.backgroundColor = 'rgb(' + [color].join(',') + ')';

