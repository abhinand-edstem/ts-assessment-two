type Diff<T> = {
    [P in keyof T]?: {
        oldValue: T[P];
        newValue: T[P];
    };
}

function deepDiff<T extends object>(obj1: T, obj2: T): Diff<T> {
    const changes: Diff<T> = {};

    for (const key in obj1) {
        const value1 = obj1[key];
        const value2 = obj2[key];

        if (typeof value1 === 'object' && value1 !== null && !Array.isArray(value1)) {
            const nestedDiff = deepDiff(value1, value2);
            if (Object.keys(nestedDiff).length > 0) {
                changes[key] = nestedDiff as any;
            }
        } else if (Array.isArray(value1) && Array.isArray(value2)) {
            if (!arraysEqual(value1, value2)) {
                changes[key] = {
                    oldValue: value1,
                    newValue: value2
                };
            }
        } else if (value1 !== value2) {
            changes[key] = {
                oldValue: value1,
                newValue: value2
            };
        }
    }

    return changes;
}

function arraysEqual(arr1: any[], arr2: any[]): boolean {
    if (arr1.length !== arr2.length) return false;
    return arr1.every((value, index) => value === arr2[index]);
}

interface User {
    name: string;
    age: number,
    settings: {
        theme: string;
        notification?: boolean;
    };
    tags: string[];
}

const oldUser: User = {
    name: 'john',
    age: 52,
    settings: {
        theme: 'dark',
        notification: true
    },
    tags: ['dev', 'admins']
};

const newUser: User = {
    name: 'john',
    age : 63,
    settings: {
        theme: 'dark',
        notification: false
    },
    tags: ['dev', 'admins', 'test']
};

console.log(deepDiff(oldUser, newUser));