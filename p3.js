var prime = 600851475143;
var divisor = 3;
var sq = 0;
var i = 0;
function is_prime(n) {
  if (n < 2) { return false; }
  if (n == 2) { return true; }

  sq = Math.ceil(Math.sqrt(n));
  for (i = 2; i <= sq; i++) {
    if (n % i == 0) { return false; }
  }

  return true;
}
var limit = Math.sqrt(prime);
var t0 = 0;
var t1 = 0;
/* only odds */
while (true) {
  if (prime % divisor == 0) {
    if (is_prime(divisor)) {
      console.log("Prime: " + divisor);
    }
  }
  divisor += 2;
  if (divisor >= limit) { break; }
}

