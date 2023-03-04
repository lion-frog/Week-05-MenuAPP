// Menu consists of Dogs, Breeds, Gender. 
class Dog { //Class is Dog
    constructor (name, breed) { //Name 
        this.name = name;
        this.breed = breed;
    }
    describe (){
        return `${this.name} is ${this.breed}`;
    }
}

class DogInfo { // Class is for a Dog Information
    constructor (name) {
        this.name = name;
        this.dogs = []; //array
    }

    addDog (dog) {
        if (dog instanceof Dog) {
            this.dogs.push(dog);
        } else {
            throw new Error (`You can only add a instance of Dog. Argument is not a Dog: ${dog}`);
        }
    } 
     describe()  {
        return `${this.name} has ${this.dogs.length} dogs`;
     } 
}
// New Class, drives the menu and user's choices

class Menu {
    constructor (){
        this.dogInfo = [];
        this.selectedDog = null; 
    }
    // add a method, starts up the menu application
    start (){
        let selection = this.showMainMenuOptions(); //top down approach, start using new methods to build out menu before we implement. 
        while (selection != 0) {
            switch (selection) {
                case '1':
                    this.inputDog();
                    break;
                case '2':
                    this.inputBreed();
                    break;
                case '3':
                    this.inputGender();
                case '4':
                    this.displayResults();
                    break;
                default:
                    selection = 0;

            }
            selection = this.showMainMenuOptions();

        }

        alert('Goodbye, Woof!');
   
    }
    //program the methods
    showMainMenuOptions() {
        return prompt (`
        0) Exit, Woof!
        1) Dog Name
        2) Dog Breed
        3) Dog Gender
        4) Display Results
        `);
    }

    showDogMenuOptions(DogInfo) {
        return prompt(`
        0) back
        1) create dog
        2) delete dog 
        ----------------
        ${DogInfo}
        `);
    }

    displayResults (){
        let resultString = '';
        for (let i = 0; i < this.dogInfo.length; i++){
            resultString += i + ')' + this.dogInfo[i].name + '\n'
        }
        alert(resultString);
    }
    inputDog() { //create Dog method
        let name = prompt ('Enter name for new dog:');
        this.dogInfo.push(new DogInfo(name)); //pushes a new instance of a dog class to the dogInfo array
        console.log ('New Dog', this.dogInfo);
    }
    inputBreed() { //create Dog method
        let name = prompt ('Enter Breed for new dog:');
        this.dogInfo.push(new DogInfo(name)); //pushes a new instance of a dog class to the dogInfo array
        console.log ('New Dog', this.dogInfo);
    }
    inputGender() {
        let name = prompt ('Enter Dog Gender:');
        this.dogInfo.push(new DogInfo(name)); //pushes a new instance of a dog class to the dogInfo array
        console.log ('New Dog', this.dogInfo);
        // Display Results
       let index = prompt ('Cute Pooch!');
        if (index > -1 && index < this.dogs.length){
         this.selectedDog = this.dogInfo[index];
         let description = 'Dog Name: ' + this.selectedDog.name + '\n';
         
        for (let i = 0; i < this.selectedDog.dogs.length; i++) {
            description += i + ')' + this.selectedDog.dogs[i].name 
              + ' - ' + this.selectedDog.dogs[i].gender +'\n'
        }
        let selection = this.showDogMenuOptions(description);
        switch (selection) {
           case '1':
                this.nameDog();
                break;
            case '2':
               this.nameDog();
                break;
            case '3':
               this.nameDog();
                break;
            case '4':
               this.deleteDog();
           }
        }
    }
// user can delete dog 
    deleteDog() {
        let index = prompt ('Enter the dog you wish to delete:');
        if (index > -1 && index < this.teams.length) {
           this.dogs.splice(index, 1); 
        }
    }
//user can create a dog, add name - breed - gender
    createDog() {
        let name = prompt ('Enter name for new Dog:');
        let breed = prompt ('Enter breed for new Dog:');
        let gender = prompt ('Enter gender of new Dog:');
        this.selectedDog.dogs.push(new Dog (name, breed));
    }
    deleteBreed() {
        let index = prompt ('Enter the index of the dog you wish to delete:');
        if (index > -1 && index < this.selectedDog.dogs.length) {
            this.selectedDog.dogs.splice(index, 1);
        }
    }
}
// create an instance so the code is invoked
let menu = new Menu();
menu.start();
