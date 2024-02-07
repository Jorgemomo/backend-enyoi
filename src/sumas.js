const numbers = [2, 3, 5, 9, 10];

const sumas = (list) => {
  //   let result = 0;
  //   for (let i = 0; i < list.length; i++) {
  //     const elem = list[i];
  //     result = result + elem;
  //   }
  //   console.log(result);
  const result = list.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );
  console.log(result);
};

sumas(numbers);
