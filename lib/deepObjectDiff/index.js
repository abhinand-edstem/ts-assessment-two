"use strict";
function deepDiff(obj1, obj2) {
    const changes = {};
    for (const key in obj1) {
        const value1 = obj1[key];
        const value2 = obj2[key];
        if (typeof value1 === 'object' && value1 !== null && !Array.isArray(value1)) {
            const nestedDiff = deepDiff(value1, value2);
            if (Object.keys(nestedDiff).length > 0) {
                changes[key] = nestedDiff;
            }
        }
        else if (Array.isArray(value1) && Array.isArray(value2)) {
            if (!arraysEqual(value1, value2)) {
                changes[key] = {
                    oldValue: value1,
                    newValue: value2
                };
            }
        }
        else if (value1 !== value2) {
            changes[key] = {
                oldValue: value1,
                newValue: value2
            };
        }
    }
    return changes;
}
function arraysEqual(arr1, arr2) {
    if (arr1.length !== arr2.length)
        return false;
    return arr1.every((value, index) => value === arr2[index]);
}
const oldUser = {
    name: 'john',
    age: 52,
    settings: {
        theme: 'dark',
        notification: true
    },
    tags: ['dev', 'admins']
};
const newUser = {
    name: 'john',
    age: 63,
    settings: {
        theme: 'dark',
        notification: false
    },
    tags: ['dev', 'admins', 'test']
};
console.log(deepDiff(oldUser, newUser));
