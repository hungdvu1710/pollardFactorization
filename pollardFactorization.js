const gcd = require('compute-gcd');

const pollardFactorization = (n) => {
  let a = 2;
  let i = 2;

  while (i < n) {
    a = (a**i) % n;
    let d = gcd((a-1), n);
    if (d > 1) {
      return d;
    }
    i++;
  }

  return "fail";
}

console.log(pollardFactorization(1573));
