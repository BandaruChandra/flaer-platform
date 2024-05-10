export function numberToInr(x) {
  if (!x) return;

  x = x.toString();
  let afterPoint = '';
  if (x.indexOf('.') > 0) afterPoint = x.substring(x.indexOf('.'), x.length);
  x = Math.floor(x);
  x = x.toString();
  let lastThree = x.substring(x.length - 3);
  let otherNumbers = x.substring(0, x.length - 3);
  if (otherNumbers != '') lastThree = ',' + lastThree;
  let res =
    otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ',') + lastThree + afterPoint;

  return res;
}

export function inrToNumber(x) {
  if (!x) return;

  let value = x.replace(/\,/g, '');
  value = parseInt(value, 10);

  return value;
}

export function calculateDiscount(ep, p) {
  let percentage = ((p - ep) / p) * 100;

  return Math.round(percentage);
}
