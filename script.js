const columnsObj = document.getElementsByClassName('column');
const columnArr = Object.values(document.getElementsByClassName('column'))
applyRandomPalette();

// Generate random HSL values
function randomHslValues() {
  return [Math.round(Math.random() * 360), Math.round(Math.random() * 50 + 50), Math.round(Math.random() * 50 + 50)];
}

// Return HSL format from values array
function valToHsl(values) {
  return `hsl(${values[0]}, ${values[1]}%, ${values[2]}%)`;
}

// Apply a random palette to all columns
function applyRandomPalette() {
  for (c of columnsObj) {c.style.backgroundColor = valToHsl(randomHslValues())}
}

// Generate a complementary colour from values array
function complemHsl(values) {
  let hue = values[0];
  if (hue >= 180) {
    hue = hue - 180;
  }
  else if (hue < 180){
    hue = hue + 180;
  }
  values[0] = hue;
  return values;
}

// Modify values' second in thirds value representing saturation and lightness
function randomSL(values) {
  values[1] = Math.round(Math.random() * 100);
  values[2] = Math.round(Math.random() * 100);
  return values;
}

// Generate a complementary palette array
function complemPalette() {
  let palette = [];
  let val = [];
  val = randomHslValues();
  palette.push(valToHsl(val));
  let valCmpl = [];
  valCmpl = complemHsl(val);
  palette.push(valToHsl(valCmpl));
  palette.push(valToHsl(randomSL(val)));
  palette.push(valToHsl(randomSL(val)));
  palette.push(valToHsl(randomSL(valCmpl)));
  return palette;
}

// Apply complementary palette to all columns
function applyComplemPalette() {
  let palette = complemPalette();
  for (let i = 0; i < 5; i++) {
    columnArr[i].style.backgroundColor = palette[i];
  }
}

// Swap individual element's colour
function swapOne(el) {
  el.parentElement.style.backgroundColor=valToHsl(randomHslValues());
  return el;  
}
