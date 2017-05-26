// Question 5

// Add a new property to the cars object called 'getYears' WITHOUT typing inside
// the cars definition below.

// The value of the getYears property should be a function that creates an
// empty array called years, then pushes only the years from cars.list to the
// years array, and then returns the years array, similar to how the getBrands
// method works.

// Lastly, log to the console the return value of the getYears method.

var cars = {
    list: [
        {brand: 'honda', model: 'civic', year: 2004},
        {brand: 'ford', model: 'f-150', year: 2016},
        {brand: 'chevrolet', model: 'camaro', year: 1970}
    ],
    getBrands: function() {
        var brands = [];

        cars.list.forEach(function(car) {
            brands.push( car.brand );
        });

        return brands;
    }
};
