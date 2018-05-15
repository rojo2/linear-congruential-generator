import { expect } from "chai";
import lcg from "../src/linear-congruential-generator"

describe("Linear Congruential Generator", () => {

  it("should test that default values are the expected ones", () => {

    expect(lcg.linearCongruentialGenerator(0))
      .to.be.equal(lcg.linearCongruentialGenerator(0, lcg.INCREMENT, lcg.MULTIPLIER, lcg.MODULUS));

  });

  it("should test that it always generates the same sequence of numbers", () => {
    
    expect(lcg.linearCongruentialGenerator(0))
      .to.be.equal(12345);
    expect(lcg.linearCongruentialGenerator(12345))
      .to.be.equal(1406932606);
    expect(lcg.linearCongruentialGenerator(1406932606))
      .to.be.equal(654583808);

  });

});
