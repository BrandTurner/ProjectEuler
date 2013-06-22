function sum_squares(limit) {
  var sum = 0, i = 0;

  for (i = 0; i <= limit; i++) {
    sum = sum + (i * i);
  }
  return sum;
}

function square_sum(limit) {
  var sum = 0, i = 0;

  for (i = 0; i <= limit; i++) {
    sum += i;
  }
  return (sum * sum);
}

console.log(square_sum(100) - sum_squares(100));