const expect = require("chai").expect;
const Mortgage = require("../../src/js/lib/Mortgage");

describe("Mortgage Calculator", () => {
  let mortgage = null;

  beforeEach(() => {
    mortgage = new Mortgage();
  });
  
  it("should have a function to calculate monthly payment", () => {
    expect(mortgage.monthlyPayment()).to.exist;
  });
 
  it("monthly Payment should return a number", () => {
    expect(mortgage.monthlyPayment(100000, 3.92, 30, 12)).to.be.a("number");
  });

  it("should calculate the correct mortgage given 100000, 3.42, 30, 12", () => {
    expect(new(mortgage).constructor(100000, 3.92, 30, 12).monthlyPayment()).to.equal(472.81);
  });
 
  it("should calculate the correct mortgage given 30000, 3.42, 30, 12 ", () => {
    expect(new(mortgage).constructor(30000, 3.42, 15, 12).monthlyPayment()).to.equal(213.29);
  });
});
