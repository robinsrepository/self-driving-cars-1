// create a class
class Point {
    // the constructor takes in x and y as parameters where I want the point to be
    constructor(x, y) {
        // I set these parameter values as class attributes so the object knows where it is
        this.x = x;
        this.y = y;
    }

    // implement as a method to the Point class to check if p is equal to the point somehow
    equals(point) {
        return this.x == point.x && this.y == point.y; // this will only be true if point and this are the same
    }

    // inside of the draw method I style the canvas context a little bit
    draw(ctx, size = 18, color = "black") {
        // the points I draw as circles
        const rad = size / 2; // the raius is whatever half of the size is
        ctx.beginPath();
        // set the fillstyle as the color
        ctx.fillStyle = color;
        // draw using the arc method
        // pass the location of x and
        // pass the radius
        // the last 2 parameters specify that I want a full circle
        // starting at 0 degrees and ending at 360 degrees (but this last one you have to write it using radiance cause thats just how the function works: 360deg = 2 PI radiance)
        ctx.arc(this.x, this.y, rad, 0, Math.PI * 2);
        ctx.fill();
    }
}

// now I write another class inside of segment.js