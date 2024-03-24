function factorial(n) {
  if (n === 0) {
    return 1;
  } else {
    let mult = 1; 
    while (n > 0) {
      mult = mult * n;
      n--;
    }
    return mult
  }
} 
