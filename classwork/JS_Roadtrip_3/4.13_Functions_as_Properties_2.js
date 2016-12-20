// Video 4.10 accompanies this exercise

// It looks like ranger4 has a station assignment at Lighthouse Pointe, but now
// there aren’t enough super-blinding bulbs for everyone.
//
// The ranger-devs want you to build a new function property for
// lighthousePointe that adds a new super-blinding bulb to the weaponBulbs
// array, complete with a name and insane wattage.
//
//  1. Create a new addBulb function property for the lighthousePointe object,
//     but don’t add it directly inside the object. Instead, add it on the
//     outside of the lighthousePointe object.
//  2. Pass in name and wattage as parameters.
//  3. Push any new bulb to the weaponBulbs array. Notice how the data is
//     arranged and indexed in the superBlinders array. That means we’re going
//     to need to push a sub-array with the name and wattage.
//
// Use the code below in your solution:

var superBlinders = [ ["Firestorm", 4000], ["Solar Death Ray", 6000], ["Supernova", 12000] ];

var lighthousePointe = {
  gateClosed: true,
  weaponBulbs: superBlinders,
  capacity: 30,
  secretPassageTo: "Underwater Outpost",
  numRangers: 3,
  ranger1: {name: "Nick Walsh", skillz: "magnification burn", station: 2},
  ranger2: {name: "Drew Barontini", skillz: "uppercut launch", station: 3},
  ranger3: {name: "Christine Wong", skillz: "bomb defusing", station: 1},
  ranger4: {name: "Jordan Wade", skillz: "dual-wield hand crossbow", station: 4},
  addRanger: function(name, skillz, station) {
    this.numRangers++;
    this["ranger" + this.numRangers] = {
      name: name,
      skillz: skillz,
      station: station
    };
  }
};

// create addBulb function property here

















// Answer:
var superBlinders = [ ["Firestorm", 4000], ["Solar Death Ray", 6000], ["Supernova", 12000] ];

var lighthousePointe = {
  gateClosed: true,
  weaponBulbs: superBlinders,
  capacity: 30,
  secretPassageTo: "Underwater Outpost",
  numRangers: 3,
  ranger1: {name: "Nick Walsh", skillz: "magnification burn", station: 2},
  ranger2: {name: "Drew Barontini", skillz: "uppercut launch", station: 3},
  ranger3: {name: "Christine Wong", skillz: "bomb defusing", station: 1},
  ranger4: {name: "Jordan Wade", skillz: "dual-wield hand crossbow", station: 4},
  addRanger: function(name, skillz, station) {
    this.numRangers++;
    this["ranger" + this.numRangers] = {
      name: name,
      skillz: skillz,
      station: station
    };
  }
};

// create addBulb function property here
lighthousePointe.addBulb = function(name, wattage) {
	this.weaponBulbs.push([name, wattage]);
};
