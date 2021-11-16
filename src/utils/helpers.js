export function toFixedNumber(num, base = 1e2) {
  return Math.round(num * base) / base;
}
