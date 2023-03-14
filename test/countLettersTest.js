const countLetters = require('../countLetters');
const assertEqual = require('../assertEqual');
assertEqual(countLetters("LHL").l, 2);
assertEqual(countLetters("angelren").e, 2);
assertEqual(countLetters("Angel Linxue Ren").l, 2);