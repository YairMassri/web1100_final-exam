// Question 4

// Call console.log and pass to it the return value of the cars.getBrands function.

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
