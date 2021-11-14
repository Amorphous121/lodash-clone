import filter from './array-methods/filter';
import map from './array-methods/map';
import includes from './array-methods/includes';
import compact from './array-methods/compact';
import chunk from './array-methods/chunk';
import fill from './array-methods/fill';
import concat from './array-methods/concat';
import last from './array-methods/last';
import head from './array-methods/head';
import nth from './array-methods/nth';

var other = nth([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], -10);

console.log(other);

export { filter, map, includes, compact, chunk, fill, head, last, concat };
