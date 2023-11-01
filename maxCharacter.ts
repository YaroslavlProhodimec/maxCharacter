// Массив наибольших значений вложенного массива
// Задача
// Возвращает массив, состоящий из наибольших чисел
// каждого вложенного массива. Для простоты предоставленный массив будет содержать ровно 4 вложенных массива.
// Should return => [4,18,12,34]
//
let matrix = [
  [1, 2, 3, 4],
  [5, 18, 0, 12],
  [3, 5, 12, 5],
  [28, 9, 2, 34],
];

const maxCharacter = (input) => {
  let newArr = [];
  let max = 0;

  for (let i = 0; i < input.length; i++) {
    max = Math.max(...input[i]);
    newArr.push(max);
  }
  return newArr;
};

console.log(maxCharacter(matrix));
function largestOfFour(arr) {
  let arrayOfMaxValues = [];
  for (let i = 0; i < arr.length; i++) {
      let subArr = arr[i];
      let maxSubArrVal = 0;
      for (let j = 0; j < subArr.length; j++) {
          let currentValue = subArr[j];
          if (currentValue > maxSubArrVal) {
            maxSubArrVal = currentValue;
          }
      }
      arrayOfMaxValues.push(maxSubArrVal);
  }
  return  arrayOfMaxValues;
}

// вариант с forEach
function largestOfFour(arr) {
  let arrayOfMaxValues = [];
  arr.forEach(subArr => {
     let maxSubArrVal = 0;
     subArr.forEach(item => {
        if (item > maxSubArrVal) {
            maxSubArrVal = item;
        }
     });
     arrayOfMaxValues.push(maxSubArrVal);
  });
  return  arrayOfMaxValues;
}
Мы можем использовать метод Math.max(...spreadOperator) с методом array.map() для циклического перебора каждого элемента во внешнем массиве, возврата максимального значения из вложенного массива и прямого возврата этого вновь созданного массива.


function largestOfFour(arr) {
  return arr.map(subArr => Math.max(...subArr));
}