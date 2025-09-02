var Student = /** @class */ (function () {
    function Student(name) {
        this._name = name;
    }
    Object.defineProperty(Student.prototype, "name", {
        get: function () {
            return this._name; // safe, no conflict
        },
        set: function (value) {
            this._name = value; //  safe, avoids recursion
        },
        enumerable: false,
        configurable: true
    });
    return Student;
}());
var s = new Student("Rakesh");
console.log(s.name); // uses getter → "Rakesh"
s.name = "Kshitij"; // uses setter
console.log(s.name); // "Kshitij"
