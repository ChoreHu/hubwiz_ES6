function* fibonacci(count) {
    let [prev, curr] = [0, 1];
    for (let i = 0;i < count - 1; i++) {
      [prev, curr] = [curr, prev + curr];
      yield curr;
    }
  }
  1,1,2,3,5,8
   
  for (let n of fibonacci(7)) {
    console.log(n);
  }