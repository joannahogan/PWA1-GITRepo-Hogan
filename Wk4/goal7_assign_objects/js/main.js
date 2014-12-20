/******************************************
 Week 4 Assignment: OBJECTS.Person
 Joanna Hogan       19 DEC 14
 *******************************************/

(function(){
    //Define variables
    var numOfPeople = 5;
    var people = []; //array created
    var names = ["Zorro", "Esteban", "Esperanza", "Tito", "Diego"];
    var interval;

    //Create a loop that instantiates person objects
    for (var i = 0; i < numOfPeople; i++) {

        //Generate a number up to the names.length
        var personIndex = Math.floor(Math.random() * names.length);

        //Use keyword to setup new person object
        var person = new Person(names[personIndex], i+1);

        populateHTML(person.name,"r"+(i+1+"c1")); //function that output persons name
        populateHTML(person.job,"r"+(i+1+"c2"));  //function that output person jobs

        people.push(person); //person added
        names.splice(personIndex, 1);
    }

    //Make sure only one interval running & clear out old
    clearInterval(interval);

    //Set interval to 30 FPS

    interval = setInterval(runUpdate, 1000 / 30);

    function populateHTML(data, field){
        var id = document.getElementById(field);
        id.innerHTML = data;
    }

    function runUpdate(){
        people.forEach(function(element){
            element.update();  //element - items in people array, .update - the prototype method person.js
        });
    }
})();

