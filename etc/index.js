// 소인수분해 (primeFactor)
function primeFactors(n) {
  const factors = [];
  let divisor = 2;

  while (n >= 2) {
    if (n % divisor == 0) {
      factors.push(divisor);
      n = n / divisor;
    } else {
      divisor++;
    }
  }
  return factors;
}

function isPrime(num) {
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

function LargestPrimeFactor(n) {
  //Function for checking whether number is prime or not
  function isPrime(n) {
    let sqrt = Math.floor(Math.sqrt(n));
    while (sqrt > 1) {
      if (n % sqrt == 0) return false;
      sqrt--;
    }
    return true;
  }
  let num = Math.floor(Math.sqrt(n));
  let Prime = true;
  var res = 0;
  //Starting from 2 we will iterate to square root of number
  for (let index = 2; index <= num; index++) {
    //If index is divisible by n first check 2nd quotient,if quotient is prime then result is found
    if (n % index == 0 && isPrime(n / index)) return n / index;
    //However if quotient is not prime we will store divisible prime numbers of n in a variable
    else if (n % index == 0 && isPrime(index)) {
      res = Math.max(res, index);
      Prime = false;
    }
  }
  //If number is not divisible by any number between 2 and its square root, then number must be prime
  return Prime ? n : res;
}

function isTriangular(num) {
  // Base case
  if (num < 0) return false;

  // A Triangular number must be sum of first n
  // natural numbers
  let sum = 0;
  for (let n = 1; sum <= num; n++) {
    sum = sum + n;
    if (sum == num) return true;
  }

  return false;
}

function processData(input) {
  function divisors(n) {
    let count = 0;
    for (let i = 1; i <= Math.floor(Math.sqrt(n)); i++) {
      if (n % i === 0) {
        if (i ** 2 !== n) {
          count += 2;
        } else {
          count += 1;
        }
      }
    }
    return count;
  }

  function solution() {
    let arr = [];
    let arrSize = 1000;
    let divisorsNumber = 0;
    let triangleNumber = 0;
    for (let i = 0; i <= arrSize; i++) {
      while (divisorsNumber <= i) {
        triangleNumber++;
        divisorsNumber = divisors((triangleNumber * (triangleNumber + 1)) / 2);
      }
      arr[i] = (triangleNumber * (triangleNumber + 1)) / 2;
    }
    let values = input.split("\n");
    for (let i = 1; i < values.length; i++) {
      console.log(arr[values[i]]);
    }
  }

  solution();
}

// Pythagorean triplets,
function main() {
  var t = parseInt(readLine());
  for (var a0 = 0; a0 < t; a0++) {
    var n = parseInt(readLine());

    (function getSpecialPythagorean() {
      let maxProduct = -1;

      for (let i = 1; i <= n / 3; i++) {
        for (let j = i; j <= n / 2; j++) {
          // console.log(i,j,n-i-j);
          if (i * i + j * j === (n - i - j) * (n - i - j)) {
            maxProduct = i * j * (n - i - j);
          }
        }
      }
      console.log(maxProduct);
    })();
  }
}
