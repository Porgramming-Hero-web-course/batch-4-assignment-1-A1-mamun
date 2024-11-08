{
  //

  function removeDuplicates(arr: number[]): number[] {
    return arr.filter((item, index) => arr.indexOf(item) === index);
  }

  console.log(removeDuplicates([1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5]));

  //
}
