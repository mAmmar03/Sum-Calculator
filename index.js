function getSumOfNumbers() {
  let countInput = prompt("How many Numbers doyoy want to enter?");
  let count = parseFloat(countInput);

  if (isNaN(count) || count <= 0) {
    alert("Please Enter a Valid Positive Number.");
    return;
  }

  let sum = 0;

  for (let i = 1; i <= count; i++) {
    let numInput = prompt(`Enter NUmber ${i}:`);
    let number = parseFloat(numInput);


    if (isNaN(number)) {
      alert("Invalid number entered. Skiping...");
      continue;
    }
    sum += number;
  }
  alert(`The sum of the numbers you entered is ${sum}`)
}
