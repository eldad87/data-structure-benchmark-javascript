var associativeArrayStorage = require('./associative_array');

var ObjectStorage = function(rows, cols, coordinateToIndex, defaultInitValue) {
    associativeArrayStorage.call(this, rows, cols, coordinateToIndex, defaultInitValue);
};

ObjectStorage.prototype = new associativeArrayStorage();
ObjectStorage.constructor = ObjectStorage;

ObjectStorage.prototype.add = function(coordinate, val) {
    if(undefined === this.data[coordinate.x]) {
        this.data[coordinate.x] = {};
    }
    this.data[coordinate.x][coordinate.y] = val;
    return this;
};


ObjectStorage.prototype.init = function() {
    this.data = {};
};

module.exports = ObjectStorage;