var AssociativeArrayStorage = function(rows, cols, coordinateToIndex, defaultInitValue) {
    this.data = [];
    this.rows = rows;
    this.cols = cols;
    this.defailtInitValue = defaultInitValue;
    this.coordinateToIndex = coordinateToIndex;
};

AssociativeArrayStorage.prototype.init = function(defaultValue) {
    this.data = [];
};

AssociativeArrayStorage.prototype.add = function(coordinate, val) {
    var key = this.coordinateToIndex(coordinate, this.rows);
    this.data[key] = val;
    return this;
};

AssociativeArrayStorage.prototype.remove = function(coordinate) {
    var key = this.coordinateToIndex(coordinate, this.rows);
    delete this.data[key];
    return this;
};

AssociativeArrayStorage.prototype.get = function(coordinate) {
    var key = this.coordinateToIndex(coordinate, this.rows);
    return this.data[key];
};

AssociativeArrayStorage.prototype.move = function(coordinate, toCoordinate) {
    var tmp = this.get(coordinate);
    this.remove(coordinate, null);
    return this.add(toCoordinate, tmp);
}



/*var arrayStorage = require('./array');

var AssociativeArrayStorage = function(rows, cols, coordinateToIndex, defaultInitValue) {
    arrayStorage.call(this, rows, cols, coordinateToIndex, defaultInitValue);
};

AssociativeArrayStorage.prototype = new arrayStorage();
AssociativeArrayStorage.constructor = AssociativeArrayStorage;

AssociativeArrayStorage.prototype.init = function() {
    this.data = [];
};

AssociativeArrayStorage.prototype.remove = function(coordinate) {
    var key = this.coordinateToIndex(coordinate, this.rows);
    delete this.data[key];
    return this;
};

AssociativeArrayStorage.prototype.move = function(coordinate, toCoordinate) {
    var tmp = this.get(coordinate);
    this.remove(coordinate, null);
    return this.add(toCoordinate, tmp);
};*/

module.exports = AssociativeArrayStorage;