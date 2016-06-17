'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(function (global) {

    var patients = [{ name: 'Inspector Javert', dob: 'Jan' }, { name: 'Billy Pilgrim', dob: 'Feb' }, { name: 'Sancho Panza', dob: 'Jan' }];

    var patientString = '';
    patients.forEach(function (patient) {
        var _patient$name = patient.name;
        var name = _patient$name === undefined ? '' : _patient$name;
        var dob = patient.dob;

        patientString += name + ': ' + dob + '\n';
    });

    var alpha = 1;

    console.log(patientString);

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

    console.log(filteredPatientNames);

    var PetOwner = function () {
        function PetOwner(name) {
            _classCallCheck(this, PetOwner);

            this.name = name;
            this.pets = [{ petName: 'Muffin', type: 'Dog' }, { petName: 'Garfield', type: 'Cat' }];
        }

        _createClass(PetOwner, [{
            key: 'meetPets',
            value: function meetPets() {
                var _this = this;

                this.pets.forEach(function (pet) {
                    console.log('Hi, I\'m ' + pet.petName + ' and I\'m a\n                ' + pet.type + '. My owner is ' + _this.name);
                });
            }
        }]);

        return PetOwner;
    }();

    global.PetOwner = PetOwner;
    global.sum = sum;
})(window);