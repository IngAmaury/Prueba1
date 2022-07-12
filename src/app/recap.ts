const usename: string | number = 'Amaury';
const sum = (a: number, b: number) => {
  return a+b;
}
sum(1,5)

class person{
  private age: number;
  lastname: string;
  constructor(age: number, lastname: string){
    this.age = age;
    this.lastname = lastname;
  }
}

const nico = new person('pepe',15);
nico.age;
nico.lastname;