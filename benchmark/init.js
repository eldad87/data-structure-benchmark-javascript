
var Benchmark = require('benchmark');
var benchmarkSuite = new Benchmark.Suite('Init 2D structures');
var helper = require('./helper');
var dimension = require('../storage/dimension');

// One dimension Storage
var ArrayOneDimension = require('../storage/one_dimension/array');
// Two dimension Storage
var ArrayTwoDimension = require('../storage/two_dimension/array');

var benchRes = benchmarkSuite
    .add({
        "name": "Array#1D#Init",
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
        "name": "Array#2D#Init",
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