var Fly = function () {
    this.location = [0,0];

    this.fly = function (x, y) {
        this.location[0] += x;
        this.location[1] += y;
    };

    this.zigzag = function (num) {
        var isZig;
        var y;

        while (num--) {
            isZig = num % 2; // should zig if count is even, otherwise it will zag
            y = isZig ? -5 : 5;
            this.fly(5, y);
        }
    };
};

exports.Fly = Fly;