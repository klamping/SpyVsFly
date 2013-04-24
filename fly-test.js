/*

fly.fly(10, -5)
// how far left/right on x axis
// how far up/down on y axis

fly.zigzag(3);
// number of zig zag's

*/

var Fly = require('./fly.js').Fly;

var should = require('chai').should();
var sinon = require('sinon');

describe('Fly', function() {
    var fly;
    beforeEach(function (){ 
        fly = new Fly();
    });

    it('should fly in a given direction for a given distance', function() {
        fly.location.should.deep.equal([0,0]);

        // Fly to our desired location
        fly.fly(10, -5);
        
        fly.location.should.deep.equal([10,-5]);

        // Fly to a new location
        fly.fly(5, 30);
        
        fly.location.should.deep.equal([15,25]);
    });

    it('should fly zig-zag for a given distance', function() {
        fly.location.should.deep.equal([0,0]);

        // spy on the fly
        sinon.spy(fly, "fly");

        // Fly to our desired location
        fly.zigzag(3);

        // assert that fly was actually called
        fly.fly.callCount.should.equal(3);

        // assert that first call had proper direction
        fly.fly.getCall(0).calledWith(5, 5).should.equal(true);
        
        fly.location.should.deep.equal([15,5]);
    });
});
