// Write a new class PGroup, similar to the Group class from Chapter 6, which
// stores a set of values. Like Group, it has add, delete, and has methods.
//
// Its add method, however, should return a new PGroup instance with the given
// member added and leave the old one unchanged. Similarly, delete creates a new
// instance without a given member.
//
// The class should work for values of any type, not just strings. It does not
// have to be efficient when used with large amounts of values.
//
// The constructor shouldn’t be part of the class’s interface (though you’ll
// definitely want to use it internally). Instead, there is an empty instance,
// PGroup.empty, that can be used as a starting value.

/** Class to mimic behavior of immutable set */
class PGroup {
    constructor(values) {
        this.values = [];
        if (Array.isArray(values)) {
            this.values = JSON.parse(JSON.stringify(values));
        } else {
            this.values = [values];
        }
    }

    add(value) {
        return this.values.includes(value)
            ? new PGroup(this.values)
            : new PGroup(this.values.concat([value]));
    }

    delete(value) {
        return this.values.includes(value)
            ? new PGroup(this.values.filter(elem => elem !== value))
            : this;
    }

    has(value) {
        return this.values.includes(value);
    }
}

const main = () => {
    // let a = PGroup.empty.add("a");
    let a = new PGroup('a');
    let ab = a.add('b');
    let b = ab.delete('a');

    console.log(b.has('b'));
    // → true
    console.log(a.has('b'));
    // → false
    console.log(b.has('a'));
    // → false
};

if (require.main === module) {
    main();
}
