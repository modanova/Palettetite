const columnsObj = document.getElementsByClassName('column');
const columnArr = Object.values(document.getElementsByClassName('column'));
var currPalette;
applyPalette(generateRandom());

// Generate random HSL color
function randomHslColor() {
  return [Math.round(Math.random() * 360), Math.round(Math.random() * 50 + 50), Math.round(Math.random() * 50 + 50)];
}

// Return HSL format from values array
function toHslFormat(values) {
  return `hsl(${values[0]}, ${values[1]}%, ${values[2]}%)`;
}

function toHexFormat(values) {
  let [h, s, l] = values;
  let [a, b, c] = hslToHex(h, s, l);
  return `#${a,b,c}`;                 // NOT CORRECT
}

function hslToHex([h, s, l]) {
  l /= 100;
  const a = s * Math.min(l, 1 - l) / 100;
  const f = n => {
    const k = (n + h / 30) % 12;
    const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
    return Math.round(255 * color).toString(16).padStart(2, '0');   // convert to Hex and prefix "0" if needed
  };
  return `#${f(0)}${f(8)}${f(4)}`.toUpperCase();
}


// Apply a random palette to all columns, display in hex


// Apply palette to all columns
function applyPalette(paletteGen) {
  currPalette = paletteGen;
  for (let i = 0; i < 5; i++) {
    columnArr[i].style.backgroundColor = toHslFormat(currPalette[i]);
    columnArr[i].querySelector('.color-value').innerHTML = hslToHex(currPalette[i]);
  }
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
// Generate a random palette array
function generateRandom() {
  let palette = new Array(5).fill(true).map(x => randomHslColor());
  return palette;
}

// Generate a complementary palette array
function generateComplementary() {
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

// Swap individual element's colour
function swapOne(el) {
  el.parentElement.style.backgroundColor=toHslFormat(randomHslColor());
  return el;  
}

function abc() {
  
}
