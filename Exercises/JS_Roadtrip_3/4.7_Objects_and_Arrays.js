// Video 4.1 accompanies this exercise

// The ranger-devs want to upgrade Lighthouse Pointe with new super-blinding
// light bulbs and remove the old existing bulbs.
//
// The new superBlinders array and lighthousePointe object are provided. Each
// index of the superBlinders array contains a bulb name and its wattage within
// a sub-array.
//
//  1. Completely remove the existing bulbs property from the lighthousePointe
//     object.
//  2. Add a weaponBulbs property to lighthousePointe and assign the superBlinders
//     array as a value.
//  3. Log the name value of the bulb with the highest wattage to the console.
//     Use the correct index from the weaponBulbs property of the lighthousePointe
//     object to access the correct name value.
//
// Do not directly change the provided code for the superBlinders array
// or the lighthousePointe object.
//
// Use the code below in your solution:

var superBlinders = [
  ["Firelight", 4000],
  ["Solar Death Ray", 6000],
  ["Supernova", 12000]
];

var lighthousePointe = {
  gateClosed: true,
  bulbs: [200, 500, 750],
  capacity: 30,
  secretPassageTo: "Underwater Outpost"
};

// remove bulbs property from lighthousePointe


// add weaponBulbs property to lighthousePointe


// log the correct weaponBulbs array value to the console













// Answer:
var superBlinders = [
  ["Firelight", 4000],
  ["Solar Death Ray", 6000],
  ["Supernova", 12000]
];

var lighthousePointe = {
  gateClosed: true,
  bulbs: [200, 500, 750],
  capacity: 30,
  secretPassageTo: "Underwater Outpost"
};

// remove bulbs property from lighthousePointe
delete lighthousePointe.bulbs;

// add weaponBulbs property to lighthousePointe
lighthousePointe.weaponBulbs = superBlinders;

// log the correct weaponBulbs array value to the console
console.log(lighthousePointe.weaponBulbs[2][0]);
