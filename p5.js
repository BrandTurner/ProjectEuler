/* Going to step in increments of 20 */
var numerator = 20;

function smallest_multiple(n) {
  for (i = 20; i > 0; i--) {
    if (n % i != 0) return false;
  }
  return true;
}

while (true) {
  if (smallest_multiple(numerator)) { console.log("Right: " + numerator )};
  numerator += 20;
}