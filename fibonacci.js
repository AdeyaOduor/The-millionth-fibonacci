const fib = n =>
  (fn => n < 0 && !(n % 2) ? -fn(Math.abs(n))[0] : fn(Math.abs(n))[0])
  (function fn(n) {
    if (!n) return [0n, 1n];
    const [_n, _n1] = fn(n >> 1);
    const _2n = _n * (2n * _n1 - _n);
    const _2n1 = _n ** 2n + _n1 ** 2n;
    return n % 2 ? [_2n1, _2n + _2n1] : [_2n, _2n1];
  });
