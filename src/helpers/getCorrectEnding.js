export default function getCorrectEnding(number) {
  const mod100 = number % 100;
  const mod10 = number % 10;

  if (mod100 >= 11 && mod100 <= 14) {
    return " товаров";
  } else if (mod10 === 1) {
    return " товар";
  } else if (mod10 >= 2 && mod10 <= 4) {
    return " товара";
  } else {
    return " товаров";
  }
}
