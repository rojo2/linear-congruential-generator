/**
 * Increment used as default for the linear congruential generator.
 * @see https://en.wikipedia.org/wiki/Linear_congruential_generator
 * @type {number}
 */
const INCREMENT = 12345;

/**
 * Multiplier used as default for the linear congruential generator.
 * @see https://en.wikipedia.org/wiki/Linear_congruential_generator
 * @type {number}
 */
const MULTIPLIER = 1103515245;

/**
 * Modulus used as default for the linear congruential generator.
 * @see https://en.wikipedia.org/wiki/Linear_congruential_generator
 * @type {number}
 */
const MODULUS = 2147483648; 

/**
 * Generates a new value based on its current `value`, `increment`, `multiplier` and `modulus`.
 *
 * @param {number} value - Current value
 * @param {number} [increment=INCREMENT] - Increment
 * @param {number} [multiplier=MULTIPLIER] - Multiplier 
 * @param {number} [modulus=MODULUS] - Modulus 
 * @returns {number} - Pseudo-random number
 */
function linearCongruentialGenerator(value, increment = INCREMENT, multiplier = MULTIPLIER, modulus = MODULUS) {
  return ((value * multiplier) + increment) % modulus;
}

export default {
  INCREMENT,
  MULTIPLIER,
  MODULUS,
  linearCongruentialGenerator
}

