/**
 * Simple helper function, helps to define is a cell should be active or not
 * @param mod
 * @param row
 * @param col
 * @returns {boolean}
 */
module.exports.isActive = function(mod, row, col) {
    return (row+1 % mod) === 0 || (col+1 % mod) === 0;
};


/**
 * Generate a Cell
 * @param status
 */
module.exports.cell = function(status) {
    this.status = status;
};

/**
 * Print Benchmark results into concole
 * @param bench
 */
module.exports.benchToConsole = function(bench) {
    for(var i = 0; i < bench.length; i++) {
        console.log(bench[i].name + ': AVG of ' + bench[i]['stats']['mean']
            + " In " + bench[i]['times']['elapsed']
            + " seconds");
    }
};