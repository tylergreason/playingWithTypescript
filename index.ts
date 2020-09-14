console.log('this is typescript!');

// test if making a class with infered types in its constructor and missusing them when instanciating causes an error 

interface Test {
    name: string; 
    id: number;
}

class TestClass {
    name: string; 
    id: number; 
    constructor(name: string, id: number){
        this.name = name;
        this.id =  id;
    }
}

const testClass = new TestClass('thisName', 10); 

console.log(testClass);
