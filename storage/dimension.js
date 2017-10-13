/**
 * Convert a coordinate (2D) into a 1D position
 * @param coordinate coordinate
 * @param rows
 * @returns {*}
 */
module.exports.coordinateToIndex = function (coordinate, rows) {
    return coordinate.x * rows + coordinate.y;
};

/**
 * Convert a (1D) position into a Coordinate (2D)
 * @param index
 * @param rows
 * @param cols
 * @returns coordinate
 */
module.exports.indexToCoordinate = function (index, rows, cols) {
    var row = Math.floor(index / rows);
    var col = index % cols;
    return new Coordinate(row, col);
};

/**
 * Check if a coordinate is a valid one
 * @param coordinate coordinate
 * @param rows
 * @param cols
 * @returns {boolean}
 */
module.exports.isValidCoordinate = function(coordinate, rows, cols) {
    return coordinate.x >= 0 &&
            coordinate.y >= 0 &&
            coordinate.x <= rows -1 &&
            coordinate.y <= cols -1;
};

module.exports.coordinate= function(x, y) {
    this.x = x;
    this.y = y;
};