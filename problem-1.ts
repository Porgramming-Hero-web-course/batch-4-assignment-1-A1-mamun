{
  //

  function sumArray(num: number[]): number {
    const sum = num.reduce((acc, cur) => acc + cur, 0);
    return sum;
  }

  console.log(sumArray([1, 2, 3, 4, 5, 6]));
  //
}
