/******************************************
 Week 4 Assignment: OBJECTS.Person
 Joanna Hogan       19 DEC 14
 *******************************************/

(function(){

    //Add the person object to global window object
    window.Person = Person;

    //Defines all possible job choices and actions for all the persons
    Person.jobs = ["teacher", "actor", "student", "pilot"];  //person constructor
    Person.actions = ["sleeping", "eating", "working"];  //person constructor

    function Person(name, row){
        console.log("Person Created: ", name);  //Logs each person's name in the console

        this.name = name; //defines name

        //sets initial action for each person
        this.action = Person.actions[Math.floor(Math.random() * Person.actions.length)];

        //sets job per person
        this.job = Person.actions[Math.floor(Math.random() * Person.jobs.length)];

        //defines row
        this.row = row;

        //displays initial action
        var id = document.getElementById("r"+this.row+"c3"); //defines id
        id.innerHTML = this.action;
    }

    //Person's update method, randomly determines action change
    Person.prototype.update = function(){
        if(Math.floor(Math.random() < .01)){ //loop to run if above calculation less that .01
            var i = Math.floor(Math.random() * Person.actions.length);
            this.action = Person.actions[i];
            var id = document.getElementById("r"+this.row+"c3");
            id.innerHTML = this.action;
        }
    }
})();