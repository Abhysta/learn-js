//sama dengan function dan variable secara default hanya bisa diakses di dalam module
//gunakan export

export class Person {
  constructor(name) {
    this.name = name;
  }

  sayHello(name) {
    console.log(`Hello ${name} my name is ${this.name}`);
  }
}
