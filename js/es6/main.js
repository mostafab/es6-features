((global) => {

    let patients = [
        {name: 'Inspector Javert', dob: 'Jan'},
        {name: 'Billy Pilgrim', dob: 'Feb'},
        {name: 'Sancho Panza', dob: 'Jan'}
    ]

    let patientString = '';
    patients.forEach(
        patient => {
            const {name = '', dob} = patient;
            patientString += `${name}: ${dob}\n`;
        }
    );
    
    const alpha = 1;
    
    console.log(patientString);

    let sum = (...nums) => nums.reduce((value, current) => value + current);
    console.log(sum(1, 2, 3, 4, 5, 6, 7, 8));
    
    let filteredPatientNames = patients
        .filter(patient => patient.dob === 'Jan')
        .map(patient => patient.name);
    
    console.log(filteredPatientNames);
    
    class PetOwner {
        constructor(name) {
            this.name = name;
            this.pets = [
                {petName: 'Muffin', type: 'Dog'},
                {petName: 'Garfield', type: 'Cat'}
            ];
        }

        meetPets() {
            this.pets.forEach(pet => {
                console.log(`Hi, I'm ${pet.petName} and I'm a
                ${pet.type}. My owner is ${this.name}`);
            });
        }
    }
    
    global.PetOwner = PetOwner;
    global.sum = sum;
    
})(window);

