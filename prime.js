const colors = require("colors/safe");

function isPrime(num) {
  if (Number.isInteger(num)) {
    for (let i = 2; i < num; i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return num > 1;
  } else {
    console.error("Введите целые числа!");
    return false;
  }
}

let primeNum = false;

function loop() {
  let args = process.argv;
  args.splice(0, 2);

  let min = Number(args[0]);
  let max = Number(args[1]);

  let color  = 'green'
  let current = 0

  for (min; min <= max; min++) {
    if (isPrime(min)) {
      
      if(current === 0) {
        console.log(colors.green(min));
        current = 1
      } else if (current === 1) {
        console.log(colors.yellow(min));
        current = 2
      } else {
        console.log(colors.red(min));
        current = 0
      }

      primeNum = true;

    }
  }

  return true;
}

loop();

if (!primeNum) {
  console.log(colors.red("Нет простых чисел!"));
}
