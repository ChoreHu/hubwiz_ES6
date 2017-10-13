class Point {
    constructor(x, y) {
      this.x = x;
      this.y = y;
    }
  }
   
  class ColorPoint extends Point {
    constructor(x, y, color) {
      //this.color = color; // ReferenceError
      super(x, y);
      this.color = color; // 正确
    }
  }
  let yellow = new ColorPoint(1,2,'yellow');