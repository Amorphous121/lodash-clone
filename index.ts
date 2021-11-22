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
import difference from './array-methods/difference';
import differenceBy from './array-methods/differenceBy';
import differenceWith from './array-methods/differenceWith';

var objects = [
  { x: 1, y: 2 },
  { x: 2, y: 1 },
];

const other = differenceWith(
  objects,
  [{ x: 1, y: 2 }],
  (a, b) => a.x === b.x && a.y === b.y
);

console.log(other);

export {
  nth,
  difference,
  filter,
  map,
  includes,
  compact,
  chunk,
  fill,
  head,
  last,
  concat,
  differenceWith,
  differenceBy,
};
