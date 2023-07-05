"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Circle_1 = require("./Circle");
const Rectangle_1 = require("./Rectangle");
let myCircle = new Circle_1.Circle(5, 10, 15);
let myRectangle = new Rectangle_1.Rectangle(5, 10, 15, 20);
let theShapes = [];
theShapes.push(myCircle);
theShapes.push(myRectangle);
for (let theShape of theShapes) {
    console.log(theShape.getInfo());
    console.log(theShape.calculateArea());
    console.log();
}
