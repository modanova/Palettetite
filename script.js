const columnsObj = document.getElementsByClassName('column');
const columnArr = Object.values(document.getElementsByClassName('column'));
var currPalette;
applyRandomPalette();

// Generate random HSL color
function randomHslColor() {
  return [Math.round(Math.random() * 360), Math.round(Math.random() * 50 + 50), Math.round(Math.random() * 50 + 50)];
}

// Return HSL format from values array
function toHslFormat(values) {
  return `hsl(${values[0]}, ${values[1]}%, ${values[2]}%)`;
}

// Apply a random palette to all columns
function applyRandomPalette() {
  for (c of columnsObj) {c.style.backgroundColor = toHslFormat(randomHslColor())}
}

// Generate a complementary colour from values array
function complemHsl(values) {
  let hue = values[0];
  hue = (hue + 180) % 360;
  return [hue, values[1], values[2]];
}

// Modify values' second in thirds value representing saturation and lightness
function randomSL(values) {
  return [values[0], Math.round(Math.random() * 100), Math.round(Math.random() * 100)];
}

// Generate a complementary palette array
function complemPalette() {
  let palette = [];
  let val = randomHslColor();
  palette.push(val);
  let valCmpl = complemHsl(val);
  palette.push(valCmpl);
  palette.push(randomSL(val));
  palette.push(randomSL(val));
  palette.push(randomSL(valCmpl));
  return palette;
}

// Apply complementary palette to all columns
function applyComplemPalette() {
  currPalette = complemPalette();
  for (let i = 0; i < 5; i++) {
    columnArr[i].style.backgroundColor = toHslFormat(currPalette[i]);
  }
}

// Swap individual element's colour
function swapOne(el) {
  el.parentElement.style.backgroundColor=toHslFormat(randomHslColor());
  return el;  
}
