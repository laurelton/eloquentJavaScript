// Write a class called Group (since Set is already taken). Like Set, it has
// add, delete, and has methods. Its constructor creates an empty group, add
// adds a value to the group (but only if it isn’t already a member), delete
// removes its argument from the group (if it was a member), and has returns a
// Boolean value indicating whether its argument is a member of the group.
//
// Use the === operator, or something equivalent such as indexOf, to determine
// whether two values are the same.
//
// Give the class a static from method that takes an iterable object as argument
// and creates a group that contains all the values produced by iterating over
// it.

/** Class representing a set */
class Group {
    constructor() {
        this.values = [];
    }

    has(val) {
        return this.values.includes(val);
    }

    add(val) {
        if (!this.has(val)) {
            this.values.push(val);
        }
    }

    delete(val) {
        if (this.has(val)) {
            const indx = this.values.indexOf(val);
            this.values.splice(indx, 1);
        }
    }

    static from(iter) {
        const grp = new Group();
        for (const val of iter) {
            grp.add(val);
        }

        return grp;
    }
}

const main = () => {
    let group = Group.from([10, 20]);
    console.log(group.has(10));
    // → true
    console.log(group.has(30));
    // → false
    group.add(30);
    console.log(group.has(30));
    // → true
    group.delete(10);
    console.log(group.has(10));
    // → false
};

main();
