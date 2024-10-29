type diff<T> = {
    [p in keyof T]?: {
        oldValue: T[P];
        newValue: T[p]
    };
}

function deepDiff<T extends object>(obj1: T, obj2: T): Diff<T> {
    let ChangeObjects: Diff<T> = {
        settings: {},
    };

    if (obj1.name !== obj2.name) {
        ChangeObjects.name = {
            oldValue: obj1.name,
            newValue: obj2.name,
        };
    }

    if (obj1.settings.theme !== obj2.settings.theme) {
        ChangeObjects.settings!.theme = {
            oldValue: obj1.settings.theme,
            newValue: obj2.settings.theme,
        };
    }

    if (obj1.settings.notification !== obj2.settings.notification) {
        ChangeObjects.settings!.notification = {
            oldValue: obj1.settings.notification,
            newValue: obj2.settings.notification,
        };
    }

    if (JSON.stringify(obj1.tags) !== JSON.stringify(obj2.tags)) {
        ChangeObjects.tags = {
            oldValue: obj1.tags,
            newValue: obj2.tags,
        };
    }

    return ChangeObjects;
}

interface User {
    name: string,
    settings: {
        theme: string,
        notification: boolean,
    },
    tags: string[];
}

const oldUser: User = {
    name: 'john',
    settings: {
        theme: 'dark',
        notification: true
    },
    tags: ['dev', 'admins']
}

const newUser: User = {
    name: 'john',
    settings: {
        theme: 'dark',
        notification: true
    },
    tags: ['dev', 'admins']
}

console.log(deepDiff(oldUser, newUser));

