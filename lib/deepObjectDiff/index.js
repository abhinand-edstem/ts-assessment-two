"use strict";
function deepDiff(obj1, obj2) {
    let ChangeObjects = {
        settings: {},
    };
    if (obj1.name !== obj2.name) {
        ChangeObjects.name = {
            oldValue: obj1.name,
            newValue: obj2.name,
        };
    }
    if (obj1.settings.theme !== obj2.settings.theme) {
        ChangeObjects.settings.theme = {
            oldValue: obj1.settings.theme,
            newValue: obj2.settings.theme,
        };
    }
    if ('notification' in obj2.settings || 'notification' in obj2.settings) {
        if (obj1.settings.notification !== obj2.settings.notification) {
            ChangeObjects.settings.notification = {
                oldValue: obj1.settings.notification,
                newValue: obj2.settings.notification,
            };
        }
    }
    if (JSON.stringify(obj1.tags) !== JSON.stringify(obj2.tags)) {
        ChangeObjects.tags = {
            oldValue: obj1.tags,
            newValue: obj2.tags,
        };
    }
    if (Object.keys(ChangeObjects.settings).length === 0) {
        delete ChangeObjects.settings;
    }
    return ChangeObjects;
}
const oldUser = {
    name: 'john',
    settings: {
        theme: 'dark',
        notification: true
    },
    tags: ['dev', 'admins']
};
const newUser = {
    name: 'john',
    settings: {
        theme: 'dark',
        notification: false
    },
    tags: ['dev', 'admins']
};
console.log(deepDiff(oldUser, newUser));
