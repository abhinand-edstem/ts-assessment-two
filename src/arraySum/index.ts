function sumArray(array: (number | string)[]): number {
    const initialValue = 0;
    let stringToArrayOfNumber = array.map(Number)
    const sum = stringToArrayOfNumber.reduce(
        (accumulator, currentValue) => accumulator + currentValue,
        initialValue,
    );

    if (isNaN(sum)) {
        throw new Error("Invalid Inputs : All String must be numeric");
    }
    return sum
}

console.log(sumArray([1, 1, 3]));
console.log(sumArray(['1', '5', '3']));
console.log(sumArray([1, 5, '10']));
console.log(sumArray([]))
console.log(sumArray([1, 'abcs', '3']));