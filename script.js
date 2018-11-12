var input = document.getElementById('input');
var select = document.getElementById('unitConvert');

function convertUnit(val, unit) {
  switch (unit) {
    case 'feet':
      console.log(val);
      console.log(unit);
      return val* 0.305;
    case 'meter':
      console.log(val);
      console.log(unit);
      return val * 3.279;
  }
}

function displayOutput(val, unit) {
  document.getElementById('output').innerText = val.toString();
  if (unit=='feet')
    document.getElementById('unit').innerText = 'meters';
  else
    document.getElementById('unit').innerText = 'foot';
}

input.addEventListener('input', () => {
  displayOutput(convertUnit(parseFloat(input.value),select.value),select.value);
});

select.addEventListener('change', () => {
  displayOutput(convertUnit(parseFloat(input.value),select.value),select.value);
});
