function multiplier(mul) {
  return (value) => {
    return value * mul;
  };
}

const double = multiplier(2);
const triple = multiplier(3);

console.log(double(3));
console.log(double(6));
console.log(double(7));

console.log(triple(7));