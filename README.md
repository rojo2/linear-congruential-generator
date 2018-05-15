# Linear Congruential Generator
![Travis CI](https://travis-ci.org/rojo2/linear-congruential-generator.svg?branch=master)

```javascript
import linearCongruentialGenerator, { MODULUS } from "@rojo2/linear-congruential-generator";

function createRandomFunction(initialValue = 0) {
  let value = initialValue;
  return function() {
    value = linearCongruentialGenerator(value);
    return value / MODULUS;
  }
}
```
