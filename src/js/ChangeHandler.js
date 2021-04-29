/**
 * This class handles change for a vending machine.
 * 
 * IMPORTANT: All amounts are in cents. E.g. $1.35 = 135. 
 * This will help with rounding errors.
 */

const { Template } = require("webpack");

// const coins = [ {quarter: 25}, {dime: 10}, {nickel: 5}, {penny: 1} ];
class ChangeHandler {

    constructor(amountDue) {
        let total = 0;
        total -= amountDue;
        this.amountDue = amountDue;
        this.cashTendered = 0;
    }

    /**
     * The customer inserts a coin, increasing the cashTendered.
     * @param {string} type either quarter, dime, nickel, or penny
     */
    insertCoin(type) {
      // TODO
      let quarter = 25;
      let dime = 10;
      let nickel = 5;
      let penny = 1;
      if (type === quarter) { 
        this.cashTendered += quarter;
      } else if (type === dime) {
        this.cashTendered += dime;
      } else if (type === nickel) {
        this.cashTendered += nickel;
      } else if (type === penny) {
        this.cashTendered += penny;
      };

    }

    /**
     * Returns true if enough coins have been inserted to at least 
     * meet the amountDue
     */
    isPaymentSufficient() {
      // TODO
      if (this.cashTendered > this.amountDue) {
        return true;
      } else if (this.cashTendered < this.amountDue) {
        return false;
      } else if (this.cashTendered == this.amountDue) {
        return true;
      }
    }

    giveChange() {
        // TODO return the correct change in the following format...
        let total = this.amountDue;
        while (total > 0) {
          if (total >= 25) {
            // give quarter and subtract 25 from total
            total -= 25;
            return { quarter: 1 };
          } else if (total >= 10) {
            // give dime and subtract 10 from total
            total -= 10;
            return { dime: 1 };
          } else if (total >= 5) {
            // give nickel and subtract 5 from total
            total -= 5;
            return { nickel: 1 };
          } else {
            // give penny and subtract 1 from total
            total -= 1;
            return { penny: 1 };
          }
        }
        return {
            quarters: 0,
            dimes: 0,
            nickels: 0,
            pennies: 0
        }
    }
    
}

module.exports = ChangeHandler;
// module.exports.coins = coins;