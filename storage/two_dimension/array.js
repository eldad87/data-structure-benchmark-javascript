var ArrayStorage = function(rows, cols, coordinateToIndex, defaultInitValue) {
    this.data = [];
    this.rows = rows;
    this.cols = cols;
    this.defailtInitValue = defaultInitValue;
    this.coordinateToIndex = coordinateToIndex;
};

ArrayStorage.prototype.init = function(defaultValue) {
    this.data = new Array(this.rows);
    for(var i = 0; i < this.rows; i++) {
        this.data[i] = new Array(this.cols);
        this.data[i].fill(null);
    }
};

ArrayStorage.prototype.add = function(coordinate, val) {
    if(undefined === this.data[coordinate.x]) {
        this.data[coordinate.x] = [];
    }
    this.data[coordinate.x][coordinate.y] = val;
    return this;
};

ArrayStorage.prototype.remove = function(coordinate) {
    this.data[coordinate.x][coordinate.y] = this.defailtInitValue;
    return this;
};

ArrayStorage.prototype.get = function(coordinate) {
    return this.data[coordinate.x][coordinate.y];
};

ArrayStorage.prototype.move = function(coordinate, toCoordinate) {
    var tmp = this.get(coordinate);
    this.remove(coordinate);
    return this.add(toCoordinate, tmp);
};

module.exports = ArrayStorage;