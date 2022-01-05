class Test {
    constructor() {
        this.name = 'utsav';
    }
    Test() {
        return `This is Default Constructor ${this.name}`;
    }
}

const test = new Test();
console.log(test.Test());

