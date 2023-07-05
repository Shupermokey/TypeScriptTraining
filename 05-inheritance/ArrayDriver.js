"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Shape_1 = require("./Shape");
const Circle_1 = require("./Circle");
const Rectangle_1 = require("./Rectangle");
let myShape = new Shape_1.Shape(10, 15);
let myCircle = new Circle_1.Circle(5, 10, 15);
let myRectangle = new Rectangle_1.Rectangle(5, 10, 15, 20);
// declare an array of shapes ... initially empty
let theShapes = [];
theShapes.push(myShape);
theShapes.push(myCircle);
theShapes.push(myRectangle);
//Compiler error
//theShapes.push("Hello");
//theShapes.push(1234);
for (let theShape of theShapes) {
    console.log(theShape.getInfo());
}
