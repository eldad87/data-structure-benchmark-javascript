var associativeArrayStorage = require('./associative_array');

var ObjectStorage = function(rows, cols, coordinateToIndex, defaultInitValue) {
    associativeArrayStorage.call(this, rows, cols, coordinateToIndex, defaultInitValue);
    this.data = {};
};

ObjectStorage.prototype = new associativeArrayStorage();
ObjectStorage.constructor = ObjectStorage;

ObjectStorage.prototype.init = function() {
    this.data = {};
};

module.exports = ObjectStorage;