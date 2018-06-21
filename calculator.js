/**
 * Declare a function named `calculatorModule`
 * this function will have two private variables declared inside of it.
 * @variable PRIVATE { Number } `memory`
 * @variable PRIVATE { Number } `total`
 * @return {object} `calculator` object that can be used
 */
var calculatorModule = (function() {
    var memory = 0;
    var total = 0;

    var calculator = {
        load: function(num) {
            if (typeof num === 'number') {
                return total = num;
            } else {
                throw err;
            }
        },
        getTotal: function() {
            return total;
        },
        add: function(addNum) {
            if(typeof addNum === 'number') {
                return total += addNum;
            } else {
                throw err;
            }
        },
        subtract: function(subNum) {
            if(typeof subNum === 'number') {
                return total -= subNum;
            } else {
                throw err;
            }
        },
        multiply: function(multiplyNum) {
            if(typeof multiplyNum === 'number') {
                return total *= multiplyNum;
            } else {
                throw err;
            }
        },
        divide: function(divideNum) {
            if(typeof divideNum === 'number') {
                return total /= divideNum;
            } else {
                throw err;
            }
        },
        recallMemory: function() {
            return memory;
        },
        saveMemory: function() {
            return memory = total;
        },
        clearMemory: function() {
            return memory = 0;
        }


        
    };   
    return calculator;
});


  /**
   * sets the `total` to the number passed in
   * @param  { Number } x
   * @return { Number }    current total
   */

  /**
   * Return the value of `total`
   * @return { Number }
   */

  /**
   * Sums the value passed in with `total`
   * @param { Number } x
   */


  /**
   * Subtracts the value passed in from `total`
   * @param  { Number } x
   */


  /**
   * Multiplies the value by `total`
   * @param  { Number } x
   */


  /**
   * Divides the value passing in by `total`
   * @param  { Number } x
   */


  /**
   * Return the value stored at `memory`
   * @return { Number }
   */


  /**
   * Stores the value of `total` to `memory`
   */


  /**
   * Clear the value stored at `memory`
   */

  /**
   * Validation
   */

