// 正常函数写法
[1, 2, 3].map(function (x) {
    return x * x;
});

// 箭头函数写法
[1, 2, 3].map(x => x * x);

// 正常函数写法
var result = values.sort(function (a, b) {
    return a - b;
});

// 箭头函数写法
var result = values.sort((a, b) => a - b);


function foo() {
    return () => {
      return () => {
        return () => {
          console.log('id:', this.id);
        };
      };
    };
  }
  
  var f = foo.call({id: 1});
  
  var t1 = f.call({id: 2})()(); // id: 1
  var t2 = f().call({id: 3})(); // id: 1
  var t3 = f()().call({id: 4}); // id: 1