console.log('this is typescript!');
var TestClass = /** @class */ (function () {
    function TestClass(name, id) {
        this.name = name;
        this.id = id;
    }
    return TestClass;
}());
var testClass = new TestClass('thisName', '10');
console.log(testClass);
