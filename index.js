function inputFieldId(id) {
  const inputField = document.getElementById(id);
  const inputFieldString = inputField.value;
  const inputFieldValue = parseInt(inputFieldString);
  return inputFieldValue;
}

function genarateRandomPin() {
  const pin = Math.round(Math.random() * 10000);
  return pin;
}
function fourDigitPin() {
  const newPin = genarateRandomPin();
  const digitString = newPin + '';
  if (digitString.length == 4) {
    return digitString;
  } else {
    return fourDigitPin();
  }
}

document
  .getElementById('calculator')
  .addEventListener('click', function (event) {
    const number = event.target.innerText;

    const typed_numbers_field = document.getElementById('typed_numbers_field');
    const preValue = typed_numbers_field.value;

    if (isNaN(number)) {
      if (number === 'C') {
        typed_numbers_field.value = '';
      } else if (number === '<') {
        const digits = preValue.split('');
        digits.pop();
        const remaining_digits = digits.join('');
        typed_numbers_field.value = remaining_digits;
      }
    } else {
      const newValue = preValue + number;
      typed_numbers_field.value = newValue;
    }
  });
document.getElementById('generate_pin').addEventListener('click', function () {
  const randon_pin_field = document.getElementById('randon_pin_field');
  const pin = fourDigitPin();
  randon_pin_field.value = pin;
});
document.getElementById('verify_pin').addEventListener('click', function () {
  const pin = inputFieldId('randon_pin_field');
  const type_pin = inputFieldId('typed_numbers_field');
  if (pin === type_pin) {
    const pin_fail = document.getElementById('pin_fail');
    const pin_success = document.getElementById('pin_success');
    pin_fail.style.display = 'none';
    pin_success.style.display = 'block';
  } else {
    const pin_fail = document.getElementById('pin_fail');
    const pin_success = document.getElementById('pin_success');
    pin_fail.style.display = 'block';
    pin_success.style.display = 'none';
  }
});
