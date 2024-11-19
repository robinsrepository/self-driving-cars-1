// graphs are datastructures made from:
// a set of nodes (also called vertices)
// a set of links (also called edges)

// G = (V, E) means: graph = (nodes/vertices, links/edges)

// the edges represent the links between the nodes
// for example: in a social network the graphs represent which relationships are friends or in YT I might be subscribed to you, but you are not to me

// I am now going to work with a Spatial Graph
// in here the nodes will represent road intersections or places where the road geometry changes

// to make things easier to understand in this project the nodes/vertices I call points
// the links/edges I call segments
// so each segment will be one point to another

// G = (V, E) now means: graph = (points, segments)

// first create a class
class Graph {
    // it's constructor has 2 parameters
    // I built the graph using points and segments
    // I initialize them to empty arrays, so I can create an empty graph as well
    constructor(points = [], segments = []) {
        // store these parameters as attributes
        this.points = points;
        this.segments = segments;
    }

    addPoint(point) {
        // take the points attribute of the class and push the given point
        this.points.push(point);
    }

    // to prevent multiple points being drawn at the same location
    // so it checks if the graph already contains the points
    containsPoint(point) {
        // using the array find method, which finds inside of these points a point that equals the given point
        // the find loops through all of the points (I call them "p") and then returns the one that equals point
        // if it doesn't find that point, it's going to retun nothing (so that will be false in boolean logic)
        return this.points.find((p) => p.equals(point));
        // equals needs to be implemented as a method to the Point class to check if p is equal to the point somehow, so I do that inside of the Point class
    }

    // checks if this point is not part of the graph, then we add the point
    tryAddPoint(point) {
        if (!this.containsPoint(point)) {
            this.addPoint(point);
            return true; // if it was a success
        }
        return false; // if it was not a success
    }

    removePoint(point) {
        // when a point has been removed, I also want the segment to that point to be removed
        const segs = this.getSegmentWithPoint(point);
        // this method I created above I implement in the segment section below
        // so then for each segment of this small list of points, I remove the segment
        for (const seg of segs) {
            this.removeSegment(seg); // using the method I deined earlier
        }
        // splice removes elements at the given index
        // here I get the index of the point
        // I want to remove just 1 element
        this.points.splice(this.points.indexOf(point), 1)
    }

    addSegment(seg) {
        // take the segment attribute of the class and push the given seg
        this.segments.push(seg);
    }

    containsSegment(seg) {
        return this.segments.find((s) => s.equals(seg));
    }

    tryAddSegment(seg) {
        // this time it checks not only if it doesn't contain the segment, but also if p1 is not euqal to p2
        if (!this.containsSegment(seg) && !seg.p1.equals(seg.p2)) {
            this.addSegment(seg);
            return true; // if it was a success
        }
        return false; // if it was not a success
    }

    removeSegment(seg) {
        // splice removes elements at the given index
        // here I get the index of the segment
        // I want to remove just 1 element
        this.segments.splice(this.segments.indexOf(seg), 1);
    }

    getSegmentWithPoint(point) {
        // I start off with an ampty array
        const segs = [];
        // then let it loop through all the segments
        for (const seg of this.segments) {
            // if the segment includes this point, I add it to the array
            if (seg.includes(point)) {
                segs.push(seg);
            }
        }
        return segs;
    }

    // delete everything in the graph
    dispose() {
        // I will just set the points and segments to empty
        this.points.length = 0;
        this.segments.lenght = 0;

    }

    // implement a draw method, with the canvas context as a paremeter
    draw(ctx) {
        // loop through all of the segments
        for (const seg of this.segments) {
            // tell each of the segments to draw themselves on the canvas context
            seg.draw(ctx);
        }

        // I do the same thing for the points
        for (const point of this.points) {
            point.draw(ctx);
        }
    }
}