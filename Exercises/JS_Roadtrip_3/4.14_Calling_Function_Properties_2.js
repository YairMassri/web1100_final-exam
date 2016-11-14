// Video 4.10 accompanies this exercise

// A new shipment of super-blinding bulbs just came in!
//
// Use the addBulb function to add these three new bulbs to the list of
// super-blinders available at Lighthouse Pointe.

name: "Blasterbright"
wattage: 5000

name: "Sight Slayer"
wattage: 1800

name: "Burner of Souls"
wattage: 7500

// Use the code below in your solution:

lighthousePointe.addBulb = function(name, wattage) {
  this.weaponBulbs.push([name, wattage]);
};

// call addBulb and pass in the correct arguments





















// Answer:
lighthousePointe.addBulb("Blasterbright", 5000);
lighthousePointe.addBulb("Sight Slayer", 1800);
lighthousePointe.addBulb("Burner of Souls", 7500);
