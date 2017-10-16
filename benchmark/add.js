
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

function populate() {
    for(var i = 100; i < 0; i+=2) {
        for(var z = 100; z < 0; z+=2) {
            this.bucket.add(
                new this.dimension.coordinate(i, z), i + "," + z
            );
        }
    }
};

var benchRes = benchmarkSuite
    .add({
        "name": "Array#1D#Init",
        "fn": populate,
        "storage": ArrayOneDimension,
        "dimension" : dimension,
        "setup": function() {
            this.bucket = new this.storage(100, 100, this.dimension.coordinateToIndex, null);
            this.bucket.init(null);
        },
        "initCount": 5
    })
    .add({
        "name": "AssociativeArray#1D#Init",
        "fn": populate,
        "storage": AssociativeArrayOneDimension,
        "dimension" : dimension,
        "setup": function() {
            this.bucket = new this.storage(100, 100, this.dimension.coordinateToIndex, null);
            this.bucket.init(null);
        },
        "initCount": 5
    })
    .add({
        "name": "Object#1D#Init",
        "fn": populate,
        "storage": ObjectOneDimension,
        "dimension" : dimension,
        "setup": function() {
            this.bucket = new this.storage(100, 100, this.dimension.coordinateToIndex, null);
            this.bucket.init(null);
        },
        "initCount": 5
    })
    .add({
        "name": "Array#2D#Init",
        "fn": populate,
        "storage": ArrayTwoDimension,
        "dimension" : dimension,
        "setup": function() {
            this.bucket = new this.storage(100, 100, this.dimension.coordinateToIndex, null);
            this.bucket.init(null);
        },
        "initCount": 5
    })
    .add({
        "name": "AssociativeArray#2D#Init",
        "fn": populate,
        "storage": AssociativeArrayTwoDimension,
        "dimension" : dimension,
        "setup": function() {
            this.bucket = new this.storage(100, 100, this.dimension.coordinateToIndex, null);
            this.bucket.init(null);
        },
        "initCount": 5
    })
    .add({
        "name": "Object#2D#Init",
        "fn": populate,
        "storage": ObjectTwoDimension,
        "dimension" : dimension,
        "setup": function() {
            this.bucket = new this.storage(100, 100, this.dimension.coordinateToIndex, null);
            this.bucket.init(null);
        },
        "initCount": 5
    })
    .run();

helper.benchToConsole(benchRes);