var arrayStorage = require('./array');

var AssociativeArrayStorage = function(rows, cols, coordinateToIndex, defaultInitValue) {
    arrayStorage.call(this, rows, cols, coordinateToIndex, defaultInitValue);
};

AssociativeArrayStorage.prototype = new arrayStorage();
AssociativeArrayStorage.constructor = AssociativeArrayStorage;

AssociativeArrayStorage.prototype.init = function() {
    this.data = [];
};

AssociativeArrayStorage.prototype.remove = function(coordinate) {
    delete this.data[coordinate.x][coordinate.y];
    return this;
};

AssociativeArrayStorage.prototype.move = function(coordinate, toCoordinate) {
    var tmp = this.get(coordinate);
    this.remove(coordinate, null);
    return this.add(toCoordinate, tmp);
};

module.exports = AssociativeArrayStorage;