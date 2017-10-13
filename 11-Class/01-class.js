class Point {
    constructor(x, y) {
      this.x = x;
      this.y = y;
    }
    toString() {
      return '('+this.x+', '+this.y+')';
    }
  }
class Student {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    eat() {
        return this.name + "is eat"
    }
    sleep() {
        return this.name + "is sleep"
    }
}
let point = new Point(1, 2);
console.log(point);
let xiaoming = new Student("小明", 20);
console.log(xiaoming.eat());