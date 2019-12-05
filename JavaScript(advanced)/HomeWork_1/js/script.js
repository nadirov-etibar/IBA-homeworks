/**
 *
 * @constructor
 * @param size        size of the hamburger
 * @param stuffing    selected stuffing
 * @throws {HamburgerException}  In case of incorrect usage
 */


function Hamburger(size, stuffing) {
    var toppingNames = [];
    this.size = size;
    this.stuffing = stuffing;
    this.setToppingNames = (newToppings) => {
        if (!newToppings instanceof Array) {
            throw new Error("new toppings has to be Array")
        }
        /* deleting all old values from toppings and inserting new values */
        toppingNames.splice(
            0,
            toppingNames.length,
            ...newToppings
        )
    };
    this.getToppingNames = () => {
        // return toppings;
        return [...toppingNames];
        // return Array.copy(toppings);
    };

    this.checkSize=(size)=>{
        try {
            switch (size) {
                case "small":
                    return Hamburger.SIZE_SMALL;
                case  "large":
                    return Hamburger.SIZE_LARGE;
                default:
                    throw new Error("Size error");
            }
        }
        catch (e) {
            console.error(e);
        }
    };
    this.checkStuffing=(stuffing)=>{
        switch (stuffing) {
            case "cheese":
                return Hamburger.STUFFING_CHEESE;
            case  "salad":
                return Hamburger.STUFFING_SALAD;
            case  "potato":
                return Hamburger.STUFFING_POTATO;
            default:
                throw new Error("stuffing error");
        }

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
        var currentToppings = this.getToppingNames();

        if (currentToppings.some(el => el === topping)) {
            throw new HamburgerException("This topping already exists!")
        } else {
            currentToppings.push(topping);
            this.setToppingNames(currentToppings);
        }
    } catch (e) {
        console.error(e.message);
    }
};

/**
 * Delete the toppping, only if it was added earlier.
 *
 * @param topping   topping type
 * @throws {HamburgerException}  in case of incorrect usage
 */
Hamburger.prototype.removeTopping = function (topping) {
    try {
        var currentToppings = this.getToppingNames();

        if (!currentToppings.some(el => el === topping)) {
            throw new HamburgerException("Nothing to delete")
        } else {
            currentToppings.splice(
                currentToppings.indexOf(topping),
                1
            );
            this.setToppingNames(currentToppings);
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
    try {
        return this.getToppingNames().map(t => this.checkTopping(t));
    } catch (e) {
        console.log(e.message);
    }
    return null;
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
    /* implement Hamburger.prototype.checkSize(),
    * to be responsible for turn 'small' into Hamburger.SIZE_SMALL object */
    try {
        return this.checkSize(this.size);
    }
    catch (e) {
        console.error(e);
    }
};

/**
 * Find out the stuffing of the Hamburger
 */
Hamburger.prototype.getStuffing = function () {
    /* implement Hamburger.prototype.checkStuffing(),
    * to be responsible for turn 'salad' into Hamburger.STUFFING_SALAD object */
    try {
        return this.checkStuffing(this.stuffing);
    }
    catch (e) {
        console.error(e);
    }
};

/**
 * Find out the price of the hamburger
 * @return {Number} the number of price in AZN
 */
Hamburger.prototype.calculatePrice = function () {
//  get size and price of it
//  +
//  get stuffing and price of it
//   +
//  get all toppings
    let price=0;
    try {
        price+= this.checkSize(this.size).price;
    }
    catch (e) {
        console.error(e);
    }
    try {
        price+= this.checkStuffing(this.stuffing).price;
    }
    catch (e) {
        console.error(e);
    }
    hamburger.getToppings().forEach(e=>{price+=e.price});
    return price;
};

/**
 * Find out callories amount of the hamburger
 * @return {Number} Number of calories
 */

Hamburger.prototype.calculateCalories = function () {
    /*same implementation, as for previous method*/
    let cal=0;
    try {
        cal+= this.checkSize(this.size).cal;
    }
    catch (e) {
        console.error(e);
    }
    try {
        cal+= this.checkStuffing(this.stuffing).cal;
    }
    catch (e) {
        console.error(e);
    }
    hamburger.getToppings().forEach(e=>{cal+=e.cal});
    return cal;
};

/**
 * Provides information about an error while working with a hamburger.
 * Details are stored in the message property.
 * @constructor
 */
function HamburgerException(msg) {
    this.message = msg;
}

// // small hamburger with cheese
var hamburger = new Hamburger("small", "cheese");
// // mayo topping
hamburger.addTopping("mayo");
// asking the number of calories
console.log("Calories: %f", hamburger.calculateCalories());
// // asking the price
console.log("Price: %f", hamburger.calculatePrice());
// // I've changed my mind, and I've decided to add more topping
hamburger.addTopping("spice");
// // Did hte price changed?
console.log("Price with sauce: %f", hamburger.calculatePrice());
// // How large is this hamburger
console.log("Is hamburger large: %s", hamburger.getSize() === Hamburger.SIZE_LARGE); // -> false
// // Remove the topping
hamburger.removeTopping("spice");
console.log("Have %d toppings", hamburger.getToppings().length); // 1
// // have not passed on the necessary parameters
var h2 = new Hamburger(); // => HamburgerException: no size given
//
// // pass incorrect values, an topping instead of a size
var h3 = new Hamburger("spice", "spice");
// // => HamburgerException: invalid size 'TOPPING_SAUCE'
//
// // add to many toppings
var h4 = new Hamburger(Hamburger.SIZE_SMALL, Hamburger.STUFFING_CHEESE);
hamburger.addTopping("mayo");
hamburger.addTopping("mayo");
// HamburgerException: duplicate topping 'TOPPING_MAYO'