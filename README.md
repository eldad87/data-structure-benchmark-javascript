# data-structure-benchmark-javascript
Benchmark different approaches to store 2D universe

## Init data structure
```
nodejs benchmark/init.js
Array#OneDimension#Init: AVG of 0.000023751360563579712 In 5.357 seconds
Array#TwoDimension#Init: AVG of 0.000028282325708289198 In 5.385 seconds
```


## Add to data structure
```
nodejs benchmark/add.js
Array#OneDimension#Init: AVG of 0.0000757355477701416 In 5.581 seconds
AssociativeArray#OneDimension#Init: AVG of 0.0000856466045221662 In 5.505 seconds
Object#OneDimension#Init: AVG of 0.00009721607432638931 In 5.529 seconds
Array#TwoDimension#Init: AVG of 0.00007308980312519192 In 5.506 seconds
AssociativeArray#TwoDimension#Init: AVG of 0.00010734685560504043 In 5.391 seconds
Object#TwoDimension#Init: AVG of 0.00010697913022083568 In 5.392 seconds
```

## Remove from data structure
```
nodejs benchmark/add.js
Array#OneDimension#Init: AVG of 0.000058140107915648384 In 5.461 seconds
AssociativeArray#OneDimension#Init: AVG of 0.00007137529046145566 In 5.447 seconds
Object#OneDimension#Init: AVG of 0.0000704202830200155 In 5.402 seconds
Array#TwoDimension#Init: AVG of 0.0000745925494054046 In 5.556 seconds
AssociativeArray#TwoDimension#Init: AVG of 0.00007826055268615982 In 5.388 seconds
Object#TwoDimension#Init: AVG of 0.00007527801219794127 In 5.358 seconds
```

## Summary
 - 1D structure is a clear winner.
 - If you don't have a memory limit, go with pre-initialized Array, otherwise go with Object.

Read more:
https://universitoo.com/2d-data-structure-benchmark