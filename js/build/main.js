'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(function () {

    var patients = [{ name: 'Inspector Javert', dob: 'Jan' }, { name: 'Billy Pilgrim', dob: 'Feb' }, { name: 'Sancho Panza', dob: 'Jan' }];

    var string = '';
    patients.forEach(function (patient) {
        return string += 'This is ' + patient.name + '. He was born in ' + patient.dob + '\n';
    });
    console.log(string);

    var sum = function sum() {
        for (var _len = arguments.length, nums = Array(_len), _key = 0; _key < _len; _key++) {
            nums[_key] = arguments[_key];
        }

        return nums.reduce(function (value, current) {
            return value + current;
        });
    };
    console.log(sum(1, 2, 3, 4, 5, 6, 7, 8));

    var filteredPatientNames = patients.filter(function (patient) {
        return patient.dob === 'Jan';
    }).map(function (patient) {
        return patient.name;
    });

    console.log(filteredPatientNames.length);

    var PetOwner = function () {
        function PetOwner(name) {
            _classCallCheck(this, PetOwner);

            this.name = name;
            this.pets = [{ petName: 'Muffin', type: 'Dog' }, { petName: 'Garfield', type: 'Cat' }] || [];
        }

        _createClass(PetOwner, [{
            key: 'meetPets',
            value: function meetPets() {
                var _this = this;

                this.pets.forEach(function (pet) {
                    return console.log(_this);
                });
            }
        }]);

        return PetOwner;
    }();

    var George = new PetOwner('George');
    George.meetPets();

    for (var _i = 0; _i < 4; _i++) {
        console.log(_i);
    }
    console.log(i);
})();