# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @angelren1220/lotide`

**Require it:**

`const _ = require('@angelren1220/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual` :  assert if two arrays are equal
* `assertEqual` : assert if two inputs are equal
* `assertObjectsEqual` : assert if two objects are equal
* `countLetters` : count numbers of each letter in a string
* `countOnly` : count numbers of an item occured in an array
* `eqArrays` : check if two arrays are equal
* `eqObjects` : check if two objects are equal
* `findKey` : find the key with callback as input
* `findKeyByValue` : find the key by value provided
* `flatten` : open the nested arrays of array
* `head` : return the first item of the array
* `letterPositions` : find and return the position of specific letter of a string
* `map` : customized map
* `middle` : return the middle item of an array
* `tail` : return the tail of an array
* `takeUntil` : take items until the flag/condition and does callback
* `without` : take out specific item from the array