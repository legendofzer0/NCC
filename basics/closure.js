//lexical scoping

function counter() {
  let count = 0;
  function increment() {
    count++;
  }
  function decrement() {
    count--;
  }
  function getCount() {
    return count;
  }
  return {
    increment,
    decrement,
    getCount,
  };
}

const counter1 = counter();
counter1.increment();
counter1.increment();
counter1.increment();
counter1.increment();
counter1.decrement();
counter1.decrement();

console.log(counter1.getCount());
