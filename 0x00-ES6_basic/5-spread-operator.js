#!/usr/bin/node

export default function concatArrays(_array1, _array2, _string) {
  return ([..._array1, ..._array2, ..._string]);
}
