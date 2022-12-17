// ----------------------------------------------------------- PROTOTYPE ------------------------------------------------------------
// Each array has prototype and proto contains all the inbuild methods of that array
// the inbuild methods are not defined on array object but defined on proto object
// Multiple objects have have same prototype wihout having seperate copy
// CREATING OUR OWN FUNCTION IN PROTOTYPE
String.prototype.yell = function () {
    return `OMG!!! ${this.toUpperCase()} !!!!!`
}

// Changing predefined function in proto
Array.prototype.yell = function () {
    console.log('I will never pop it out!!!')
}

// __proto__ is reference to actual template object

// --------------------------------------------------------OOP -----------------------------------------------------------------------
// -------------  1. fACTORY FUNCTIONS
function makeColor(r, g, b) {
    const color = {};
    color.r = r;
    color.g = g;
    color.b = b;
    color.rgb = function () {
        const { r, g, b } = this;
        return `rgb(${r}, ${g}, ${b})`;
    };
    color.hex = function () {
        const { r, g, b } = this;
        return ('#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1))
    }
    return color

}

const firstColor = makeColor(35, 255, 150)
const black = makeColor(0, 0, 0)

// For each color new copy of functions is created 
console.log(firstColor.hex === black.hex)


// -------------------------------------- 2. Constructor functions
// Never use arrow function
function Colors(r, g, b) {
    this.r = r
    this.g = g
    this.b = b

}

// Now this will be inside proto
Colors.prototype.rgb = function () {
    const { r, g, b } = this;
    return `rgb(${r}, ${g}, ${b})`;
};
Colors.prototype.hex = function () {
    const { r, g, b } = this;
    return ('#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1))
}
Colors.prototype.rgba = function (a = 1.0) {
    const { r, g, b } = this;
    return `rgb(${r}, ${g}, ${b})`;
}

const color = new Colors(255, 40, 100);
const color1 = new Colors(0, 0, 0);
console.log(color.rgb())

console.log(color.hex === color1.hex)

// Here whenever you write this a new object is created just as line 20
// Here this refers to its object if it is present otherwise window object

// -------------------------------------------- 3 Classes and objects
class Color {
    constructor(r, g, b, name) {
        this.r = r;
        this.g = g;
        this.b = b;
        this.name = name;
        this.calcHsl()
    }
    innerRGB() {
        const { r, g, b } = this
        return `${r}, ${g}, ${b}`;
    }
    rgb() {
        return `rgb(${this.innerRGB()})`
    }
    rgba(a = 1.0) {
        const { r, g, b } = this;
        return `rgb(${this.innerRGB()}, ${a})`;
    }
    hex() {
        const { r, g, b } = this;
        return ('#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1))
    }
    calcHsl() {
        let { r, g, b } = this
        r /= 255, g /= 255, b /= 255;
        var max = Math.max(r, g, b), min = Math.min(r, g, b);
        var h, s, l = (max + min) / 2;

        if (max == min) {
            h = s = 0; // achromatic
        } else {
            var d = max - min;
            s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
            switch (max) {
                case r: h = (g - b) / d + (g < b ? 6 : 0); break;
                case g: h = (b - r) / d + 2; break;
                case b: h = (r - g) / d + 4; break;
            }
            h /= 6;
        }
        this.h = h
        this.l = l
        this.s = s
        return [h, s, l];
    }
    hsl() {
        const { h, s, l } = this
        return `hsl(${h}, ${s}%, ${l}%)`
    }

}

const c1 = new Color(255, 67, 89, 'tomato');
const c2 = new Color(255, 255, 255, 'White');
console.log(c2.hex == c1.hex)

// --------------------------------------------------------------------------------------Inheritance ----------------------------------------------
class Pet {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    eat() {
        return `${this.name} is eating`
    }
}

class Cat extends Pet {
    constructor(name, age, liveLeft = 9){
        super(name, age) //Calls constructor of parent class
        this.liveLeft = liveLeft
    }
    meow() {
        return 'MEOWWW!!!'
    }
}

class Dog extends Pet {
    meow() {
        return 'WOFF!!'
    }
    eat(){
        return `${this.name} scarfs his foods `
    }
}

const rani = new Cat('rani', 5);
const raja = new Cat('raja', 5);

// We move duplicated code into a different class and inherit in dog and cat

raja.eat() //Call the chcild version

