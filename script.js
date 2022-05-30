const columns = document.getElementsByClassName('column');

function randomHslValues() {
  return [Math.round(Math.random() * 360), Math.round(Math.random() * 100), Math.round(Math.random() * 100)]
}

function hslRandom(values) {
  return `hsl(${values[0]}, ${values[1]}%, ${values[2]}%)`;
}

function complemHsl(values) {
  let hue = values[0];
  if (hue > 180) {
    hue -= 180;
  }
  else {
    hue += 180;
  }
  values[0] = hue;
  return values;
}

function randomPalette() {
  for (c of columns) {c.style.backgroundColor=hslRandom(randomHslValues())}
}


