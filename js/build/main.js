// Your code here!
'use strict';

(function () {

    Array.prototype.map = Array.prototype.map || function (func) {
        var newArr = [];
        for (var i = 0; i < this.length; i++) {
            newArr.push(func(this[i]));
        }
        return newArr;
    };

    Array.prototype.filter = Array.prototype.filter || function (func) {
        var newArr = [];
        for (var i = 0; i < this.length; i++) {
            if (func(this[i])) {
                newArr.push(func(this[i]));
            }
        }
        return newArr;
    };

    Array.prototype.reduce = Array.prototype.reduce || function (func) {
        var initialValue = arguments.length <= 1 || arguments[1] === undefined ? 0 : arguments[1];

        var lastValue = initialValue;
        for (var i = 0; i < this.length; i++) {
            lastValue = func(lastValue, this[i]);
        }
        return lastValue;
    };

    var patients = [{ name: 'Inspector Javert', dob: 'Jan' }, { name: 'Billy Pilgrim', dob: 'Feb' }, { name: 'Sancho Panza', dob: 'Jan' }];

    var dog = { name: 'Spot', breed: 'Pomeranian' };

    var name = dog.name;
    var breed = dog.breed;


    console.log('Hello, ' + name + ', you\'re a ' + breed);

    var sum = function sum() {
        for (var _len = arguments.length, nums = Array(_len), _key = 0; _key < _len; _key++) {
            nums[_key] = arguments[_key];
        }

        return nums.reduce(function (value, current) {
            return value + current;
        });
    };

    console.log(sum(1, 2, 3, 4, 5, 6, 7, 8));

    var filteredPatients = patients.filter(function (patient) {
        return patient.dob === 'Jan';
    }).map(function (patient) {
        return patient.name;
    });

    console.log(filteredPatients.length);
})();

// console.log(Array.prototype.map);