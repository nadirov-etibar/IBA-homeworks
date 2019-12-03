// /**
//  *
//  * @constructor
//  * @param size        size of the hamburger
//  * @param stuffing    selected stuffing
//  * @throws {HamburgerException}  In case of incorrect usage
//  */
// function Hamburger(size, stuffing) {
//     this.size = size;
//     this.stuffing = stuffing;
// }
//
// /* Sizes, types of stuffings and toppings */
// Hamburger.SIZE_SMALL = {
//     price: 50,
//     calories: 20
// };
// Hamburger.SIZE_LARGE = {
//     price: 100,
//     calories: 40
// };
// Hamburger.STUFFING_CHEESE = {
//     price: 10,
//     calories: 20
// };
// Hamburger.STUFFING_SALAD = {
//     price: 20,
//     calories: 5};
// Hamburger.STUFFING_POTATO = {
//     price: 15,
//     calories: 10
// };
// Hamburger.TOPPING_MAYO = {
//     price: 20,
//     calories: 5
// };
// Hamburger.TOPPING_SPICE = {
//     price: 15,
//     calories: 0
// };
//
// /**
//  * Add topping to hamburger. Several toppings can be added, only if they are different. You can't add same topping two times.
//  *
//  * @param topping     type of topping
//  * @throws {HamburgerException}  in case of incorrect usage
//  */
// Hamburger.prototype.addTopping = function (topping){};
//
// /**
//  * Delete the topping, only if it was added earlier.
//  *
//  * @param topping   topping type
//  * @throws {HamburgerException}  in case of incorrect usage
//  */
// Hamburger.prototype.removeTopping = function (topping){};
//
// /**
//  * Get list of toppings
//  *
//  * @return {Array} an Array with the list of constants like Hamburger.TOPPING_* inside
//  */
// Hamburger.prototype.getToppings = function (){};
//
// /**
//  * Find out the size of the Hamburger
//  */
// Hamburger.prototype.getSize = function () {};
//
// /**
//  * Find out the stuffing of the Hamburger
//  */
// Hamburger.prototype.getStuffing = function () {};
//
// /**
//  * Find out the price of the hamburger
//  * @return {Number} the number of price in AZN
//  */
// Hamburger.prototype.calculatePrice = function () {};
//
// /**
//  * Find out callories amount of the hamburger
//  * @return {Number} Number of calories
//  */
// Hamburger.prototype.calculateCalories = function () {};
//
// /**
//  * Provides information about an error while working with a hamburger.
//  * Details are stored in the message property.
//  * @constructor
//  */
// function HamburgerException () { };
//
// // small hamburger with cheese
// var hamburger = new Hamburger(Hamburger.SIZE_SMALL, Hamburger.STUFFING_CHEESE);
// // mayo topping
// hamburger.addTopping(Hamburger.TOPPING_MAYO);
// // asking the number of calories
// console.log("Calories: %f", hamburger.calculateCalories());
// // asking the price
// console.log("Price: %f", hamburger.calculatePrice());
// // I've changed my mind, and I've decided to add more topping
// hamburger.addTopping(Hamburger.TOPPING_SPICE);
// // Did hte price changed?
// console.log("Price with sauce: %f", hamburger.calculatePrice());
// // How large is this hamburger
// console.log("Is hamburger large: %s", hamburger.getSize() === Hamburger.SIZE_LARGE); // -> false
// // Remove the topping
// hamburger.removeTopping(Hamburger.TOPPING_SPICE);
// console.log("Have %d toppings", hamburger.getToppings().length); // 1
// // have not passed on the necessary parameters
// var h2 = new Hamburger(); // => HamburgerException: no size given
//
// // pass incorrect values, an topping instead of a size
// var h3 = new Hamburger(Hamburger.TOPPING_SPICE, Hamburger.TOPPING_SPICE);
// // => HamburgerException: invalid size 'TOPPING_SAUCE'
//
// // add to many toppings
// var h4 = new Hamburger(Hamburger.SIZE_SMALL, Hamburger.STUFFING_CHEESE);
// hamburger.addTopping(Hamburger.TOPPING_MAYO);
// hamburger.addTopping(Hamburger.TOPPING_MAYO);
// HamburgerException: duplicate topping 'TOPPING_MAYO'

/**
 *
 * @constructor
 * @param size        size of the hamburger
 * @param stuffing    selected stuffing
 * @throws {HamburgerException}  In case of incorrect usage
 */


function Hamburger(size, stuffing) {
    var toppings = [];
    this.size = size;
    this.stuffing = stuffing;
    this.setToppings = (newToppings) => {
        if (!newToppings instanceof Array) {
            throw new Error("new toppings has to be Array")
        }
        /* deleting all old values from toppings and inserting new values */
        toppings.splice(
            0,
            toppings.length,
            ...newToppings
        )
    };
    this.getToppings = () => {
        // return toppings;
        return [...toppings];
        // return Array.copy(toppings);
    }
}

/* Sizes, types of stuffings and toppings */
Hamburger.SIZE_SMALL = Object.freeze({
    price: 50,
    cal: 20
});

Hamburger.SIZE_LARGE = {
    price: 100,
    cal: 20
};
Hamburger.STUFFING_CHEESE = {
    price: 10,
    cal: 20
};
Hamburger.STUFFING_SALAD = {
    price: 20,
    cal: 5
};
Hamburger.STUFFING_POTATO = {
    price: 15,
    cal: 10
};
Hamburger.TOPPING_MAYO = {
    price: 20,
    cal: 5
};
Hamburger.TOPPING_SPICE = {
    price: 15,
    cal: 0
};

/**
 * Add topping to hamburger. Several toppings can be added, only if they are different. You can't add same topping two times.
 *
 * @param topping     type of topping will be passed as a String like "mayo"
 * @throws {HamburgerException}  in case of incorrect usage
 */
Hamburger.prototype.addTopping = function (topping) {
    try {
        var currentToppings = this.getToppings();

        if (currentToppings.some(el => el === topping)) {
            throw new HamburgerException("This topping already exists!")
        } else {
            currentToppings.push(topping);
            this.setToppings(currentToppings);
        }
    } catch (e) {
        console.error(e.message);
    }
};

/**
 * Delete the topping, only if it was added earlier.
 *
 * @param topping   topping type
 * @throws {HamburgerException}  in case of incorrect usage
 */
Hamburger.prototype.removeTopping = function (topping) {
    try {
        var currentToppings = this.getToppings();

        if (!currentToppings.some(el => el === topping)) {
            throw new HamburgerException("Nothing to delete")
        } else {
            currentToppings.splice(
                currentToppings.indexOf(topping),
                1
            );
            this.setToppings(currentToppings);
        }
    } catch (e) {
        console.error(e.message);
    }
};

/**
 * Get list of toppings
 *
 * @return {Array} an Array with the list of constants like Hamburger.TOPPING_* inside
 */
Hamburger.prototype.getToppings = function () {

};
Hamburger.prototype.checkTopping = function (topping) {
    switch (topping) {
        case "mayo":
            return Hamburger.TOPPING_MAYO;
        case "spice":
            return Hamburger.TOPPING_SPICE;
        default:
            throw new HamburgerException("Incorrect topping value!");
    }
};

/**
 * Find out the size of the Hamburger
 */
Hamburger.prototype.getSize = function () {

};

/**
 * Find out the stuffing of the Hamburger
 */
Hamburger.prototype.getStuffing = function () {

};

/**
 * Find out the price of the hamburger
 * @return {Number} the number of price in AZN
 */
Hamburger.prototype.calculatePrice = function () {

};

/**
 * Find out callories amount of the hamburger
 * @return {Number} Number of calories
 */

Hamburger.prototype.calculateCalories = function () {

};

/**
 * Provides information about an error while working with a hamburger.
 * Details are stored in the message property.
 * @constructor
 */
function HamburgerException(msg) {
    this.message = msg;
}

// HamburgerException.prototype = Object.create(Error.prototype);

const hamburger = new Hamburger(Hamburger.SIZE_SMALL, Hamburger.STUFFING_CHEESE);

console.log("toppings before");
console.table(hamburger.getToppings());

hamburger.addTopping("mayo");

console.log("toppings after");
console.table(hamburger.getToppings());

hamburger.addTopping("TOPPING_MAYO");
