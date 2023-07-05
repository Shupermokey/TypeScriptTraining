import { Shape } from "./Shape";
import { Circle } from "./Circle";
import { Rectangle } from "./Rectangle";

let myShape = new Shape(10, 15);
let myCircle = new Circle(5,10,15);
let myRectangle = new Rectangle(5,10,15,20);

// declare an array of shapes ... initially empty

let theShapes: Shape[] = [];

theShapes.push(myShape);
theShapes.push(myCircle);
theShapes.push(myRectangle);

//Compiler error
//theShapes.push("Hello");
//theShapes.push(1234);

for(let theShape of theShapes){
    console.log(theShape.getInfo());
}
