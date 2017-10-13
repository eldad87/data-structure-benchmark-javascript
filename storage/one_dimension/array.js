var ArrayStorage = function(rows, cols, coordinateToIndex, defaultInitValue) {
    this.data = [];
    this.rows = rows;
    this.cols = cols;
    this.defailtInitValue = defaultInitValue;
    this.coordinateToIndex = coordinateToIndex;
};

ArrayStorage.prototype.init = function(defaultValue) {
    this.data = new Array(this.rows * this.cols);
    this.data.fill(defaultValue);
}

ArrayStorage.prototype.add = function(coordinate, val) {
    var key = this.coordinateToIndex(coordinate, this.rows);
    this.data[key] = val;
    return this;
};

ArrayStorage.prototype.remove = function(coordinate) {
    var key = this.coordinateToIndex(coordinate, this.rows);
    this.data[key] = this.defailtInitValue;
    return this;
};

ArrayStorage.prototype.get = function(coordinate) {
    var key = this.coordinateToIndex(coordinate, this.rows);
    return this.data[key];
};

ArrayStorage.prototype.move = function(coordinate, toCoordinate) {
    var tmp = this.get(coordinate);
    this.remove(coordinate);
    return this.add(toCoordinate, tmp);
};

module.exports = ArrayStorage;