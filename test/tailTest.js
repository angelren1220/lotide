const tail = require("../tail");
const assertEqual = require("../assertEqual");

const words = ["Yo Yo", "Lighthouse", "Labs"];
assertEqual(tail(words).length, words.length);
const empty = [];
assertEqual(tail(empty).length, empty.length);