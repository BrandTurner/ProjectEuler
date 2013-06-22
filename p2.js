var x = 0, y = 1, sum = 0, z;

do {
  z = x + y;
  x = y;
  y = z;
  if (y % 2 == 0) { sum += y }
} while (y <= 4000000);

console.log(sum);