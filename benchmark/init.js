
var Benchmark = require('benchmark');
var benchmarkSuite = new Benchmark.Suite('Init 2D structures');
var helper = require('./helper');
var dimension = require('../storage/dimension');

// One dimension Storage
var ArrayOneDimension = require('../storage/one_dimension/array');
var AssociativeArrayOneDimension = require('../storage/one_dimension/associative_array');
var ObjectOneDimension = require('../storage/one_dimension/object');
// Two dimension Storage
var ArrayTwoDimension = require('../storage/two_dimension/array');
var AssociativeArrayTwoDimension = require('../storage/two_dimension/associative_array');
var ObjectTwoDimension = require('../storage/two_dimension/object');

var benchRes = benchmarkSuite
    .add({
        "name": "Array#OneDimension#Init",
        "fn": function() {
            this.bucket.init(null);
        },
        "storage": ArrayOneDimension,
        "dimension" : dimension,
        "setup": function() {
            this.bucket = new this.storage(100, 100, this.dimension.coordinateToIndex, null);
        },
        "initCount": 5
    })
    .add({
        "name": "Array#TwoDimension#Init",
        "fn": function() {
            this.bucket.init(null);
        },
        "storage": ArrayTwoDimension,
        "dimension" : dimension,
        "setup": function() {
            this.bucket = new this.storage(100, 100, this.dimension.coordinateToIndex, null);
        },
        "initCount": 5
    })
    .run();

helper.benchToConsole(benchRes);