class Segment {
    // the constructor will have points this time
    constructor(p1, p2) {
        // save these as attributes of the class
        this.p1 = p1;
        this.p2 = p2;
    }

    // implement as a method to the Segment class to check if s is equal to the segment somehow
    equals(seg) {
        // return (this.p1 == seg.p1 && this.p2 == seg.p2) || (this.p1 == seg.p2 && this.p2 == seg.p1); 
        // this time I also want to check the opposite, thats why I added "or" with ||
        // but there is a way to write the above DRY
        // for this I create a helper method below called includes(point)
        // then if I write this line of code, the same thing happens but with more clean code
        return this.includes(seg.p1) && this.includes(seg.p2);
    }

    // check if the segments includes a point
    includes(point) {
        return this.p1.equals(point) || this.p2.equals(point);
    }

    // implement the draw method
    // the width represents how thick the segment will be, I give it a default value of 2
    draw(ctx, width = 2, color = "black") {
        ctx.beginPath();
        // set linewidth to the given width
        ctx.lineWidth = width;
        // set strokestyle to the given color
        ctx.strokeStyle = color;
        ctx.moveTo(this.p1.x, this.p1.y);
        ctx.lineTo(this.p2.x, this.p2.y);
        ctx.stroke();
    }
}

// now I test if this works in the index file by passing some points into the Graph()