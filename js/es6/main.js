// Your code here!
'use strict';


(function() {
    
    Array.prototype.map = Array.prototype.map || function(func) {
        let newArr = [];
        for (let i = 0; i < this.length; i++) {
            newArr.push(func(this[i]));
        }
        return newArr;
    }

    Array.prototype.filter = Array.prototype.filter || function(func) {
        let newArr = [];
        for (let i = 0; i < this.length; i++) {
            if (func(this[i])) {
                newArr.push(func(this[i]));   
            }
        }
        return newArr;
    }

    Array.prototype.reduce = Array.prototype.reduce || function(func, initialValue = 0) {
        let lastValue = initialValue;
        for (let i = 0; i < this.length; i++) {
            lastValue = func(lastValue, this[i]);
        }
        return lastValue;
    }

    let patients = [
        {name: 'Inspector Javert', dob: 'Jan'},
        {name: 'Billy Pilgrim', dob: 'Feb'},
        {name: 'Sancho Panza', dob: 'Jan'}
    ]

    const dog = { name: 'Spot', breed: 'Pomeranian' };

    const {name, breed} = dog;
    
    console.log(`Hello, ${name}, you're a ${breed}`);

    let sum = (...nums) => nums.reduce((value, current) => value + current);

    console.log(sum(1, 2, 3, 4, 5, 6, 7, 8));
    
    let filteredPatients = patients.filter(patient => patient.dob === 'Jan').map(patient => patient.name);
    
    console.log(filteredPatients.length);
    
})();

// console.log(Array.prototype.map);