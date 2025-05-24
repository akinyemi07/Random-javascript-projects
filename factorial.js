function factorial(n) {
  if (n<0) return undefined;
  return n === 0 ? 1 : n * factorial(n - 1);
}

