function sumArray(array: (number | string)[]): number {
    const initialValue = 0;
    let stringToArrayConversion = array.map(Number)
    const sumArrayInNumber = stringToArrayConversion.reduce(
        (accumulator, currentValue) => accumulator + currentValue,
        initialValue,
    );

    if (isNaN(sumArrayInNumber)) {
        throw new Error("Invalid Inputs : All String must be numeric");
    }
    return sumArrayInNumber
}

console.log(sumArray(['1', '5', '3']));
console.log(sumArray([1, 1, 3]));
console.log(sumArray([1, 5, '10']));
console.log(sumArray([]))
console.log(sumArray([1, 'abcs', '3']));