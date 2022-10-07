// Make the Group class from the previous exercise iterable. Refer to the
// section about the iterator interface earlier in the chapter if you aren’t
// clear on the exact form of the interface anymore.
//
// If you used an array to represent the group’s members, don’t just return the
// iterator created by calling the Symbol.iterator method on the array. That
// would work, but it defeats the purpose of this exercise.

const Group = require('./group.js');

/** Iterator for Group class */
class GroupIterator {
    constructor(group) {
        this.group = group;
        this.values = this.group.values;
        this.indx = 0;
    }

    next() {
        const state = {};
        if (this.indx < this.values.length) {
            state.value = this.values[this.indx];
            state.done = false;
            this.indx += 1;
        } else {
            state.done = true;
        }

        return state;
    }
}

Group.prototype[Symbol.iterator] = function() {
    return new GroupIterator(this);
};

const main = () => {
    for (let value of Group.from(['a', 'b', 'c'])) {
    console.log(value);
    }
    // → a
    // → b
    // → c
};

main();
