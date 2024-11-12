//module object digunakan untuk mengimport banyak export sekaligus
export const firstName = "Abhysta";
export const middleName = "Huda";
export const lastName = "Arrofif";

export function sayHi(firstName, middleName, lastName) {
  console.log(`Hi ${firstName} ${middleName} ${lastName}`);
}

export class Person {
  constructor(firstName, middleName, lastName) {
    this.firstName = firstName;
    this.middleName = middleName;
    this.lastName = lastName;
  }

  sayHi() {
    console.log(`Hi ${this.firstName} ${this.middleName} ${this.lastName}`);
  }
}
