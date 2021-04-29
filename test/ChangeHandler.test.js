const ChangeHandler = require("../src/js/ChangeHandler");
// const coins = require("../src/js/ChangeHandler");

describe("ChangeHandler", function() {
  test("class is defined", function() {
    // Remember, you can arrange, act, and assert...start small
    expect(ChangeHandler).toBeDefined();
  });

  // TODO: Add additional tests below...
  test("constructor - amount due", function() {
    const add = new ChangeHandler();
    expect(add.amountDue).toEqual();
  });

  test("constructor - cash tendered", function() {
    const add = new ChangeHandler();
    expect(add.cashTendered).toEqual(0);
  });

  test("insert quarter", function() {
    const add = new ChangeHandler();
    add.insertCoin(25);
    expect(add.cashTendered).toEqual(25);
  });

  test("insert dime", function() {
    const add = new ChangeHandler();
    add.insertCoin(10);
    expect(add.cashTendered).toEqual(10);
  });

  test("insert nickel", function() {
    const add = new ChangeHandler();
    add.insertCoin(5);
    expect(add.cashTendered).toEqual(5);
  });

  test("insert penny", function() {
    const add = new ChangeHandler();
    add.insertCoin(1);
    expect(add.cashTendered).toEqual(1);
  });

  test("insert multiple", function() {
    const add = new ChangeHandler();
    add.insertCoin(10);
    add.insertCoin(5);
    add.insertCoin(5);
    add.insertCoin(1);
    expect(add.cashTendered).toEqual(21);
  });

  // test("greater than", function() {
  //   const add = new ChangeHandler();
  //   expect(add.isPaymentSufficient).toBe(true);
  // });

  test("32 change produces", function() {
    const add = new ChangeHandler();
    add.giveChange(32);
    expect(add.giveChange).toEqual([ {quarter: 1}, {dime: 0}, {nickel: 1}, {penny:2} ]);
  });

});

// Test requirements:
//
// -constructor-
// amountDue is set based on an argument
// cashTendered is set to zero
//
// -insertCoin-
// inserting a quarter adds 25
// inserting a dime adds 10
// inserting a nickel adds 5
// inserting a penny adds 1
// calling function multiple times continues to add on to the amount
//
// -isPaymentSufficient-
// returns true if cashTendered is more than amountDue
// returns false if cashTendered is less than amountDue
// returns true if cashTendered is equal to amountDue
//
// -giveChange-
// 32 change produces: 1 Q, 0 D, 1 N, 2 P
// 10 change produces: 0 Q, 1 D, 0 N, 0 P
// 27 change produces: 1 Q, 0 D, 0 N, 2 P
// 68 change procuces: 2 Q, 1 D, 1 N, 3 P