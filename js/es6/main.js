(() => {

    let patients = [
        {name: 'Inspector Javert', dob: 'Jan'},
        {name: 'Billy Pilgrim', dob: 'Feb'},
        {name: 'Sancho Panza', dob: 'Jan'}
    ]

    let string = '';
    patients.forEach(
        patient => string += `This is ${patient.name}. He was born in ${patient.dob}\n`
        );
    console.log(string);

    let sum = (...nums) => nums.reduce((value, current) => value + current);
    console.log(sum(1, 2, 3, 4, 5, 6, 7, 8));
    
    let filteredPatientNames = patients
        .filter(patient => patient.dob === 'Jan').map(patient => patient.name);
    
    console.log(filteredPatientNames.length);

    class PetOwner {
        constructor(name) {
            this.name = name;
            this.pets = [
                {petName: 'Muffin', type: 'Dog'},
                {petName: 'Garfield', type: 'Cat'}
            ] || []
        }

        meetPets() {
            this.pets.forEach(pet => console.log(this));
        }
    }
    const George = new PetOwner('George');
    George.meetPets();

    for (let i = 0; i < 4; i++) {
        console.log(i);
    }
    console.log(i);
    
})();

