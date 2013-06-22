var num = 0;

function is_palindrome(product) {
  l = 0;
  p = product.length - 1;

  while ((l < p) && (product.charAt(l) == product.charAt(p))) {
    l += 1;
    p -= 1;
  }
  return p <= l;
}
var num_string = "";
var largest = 0;
for (i = 100; i < 1000; i++) {
  for (j = 100; j < 1000; j++) {
    num = i * j;
    num_string = num.toString();
    if (is_palindrome(num_string)) { 
      if (num > largest) { largest = num; }
    }
  }
}

console.log(largest);