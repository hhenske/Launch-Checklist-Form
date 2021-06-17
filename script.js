
// Write your JavaScript code here!

//to do - write set up even handler that runs when the form's submit event is triggered: 1stline should have preventDefault
window.addEventListener("load", function() {
   let form = this.document.querySelector("form");
   form.addEventListener("submit",function(event) {
      event.preventDefault();
      let pilotName = document.querySelector("input[name=pilotName]");
      let copilotName = document.querySelector("input[name=copilotName]");
      let fuelLevel = document.querySelector("input[name=fuelLevel]");
      let cargoMass = document.querySelector("input[name=cargoMass]");
      
      function showElement() {
         faultyItems = document.getElementById("faultyItems");

         faultyItems.style.visibility = 'visible';
      } //end of function that's SUPPOSED to make faultyItems visible, but doesn't

      if (pilotName.value === "" || copilotName.value === "" || fuelLevel.value === ""
      || cargoMass.value === "" ) {
         alert("All fields are required!");
         //event.preventDefault();
      } //end of if statement
      
//got code below from W3 schools
      function allLetter(inputText) {
         var letters = /^[A-Za-z]+$/;
         if (inputText.value.match(letters)) {
            return true
         } else {
            alert("Names should be all letters");
         } //end of else
      } //end of allLetter function
      allLetter(pilotName);
      allLetter(copilotName);
   
      
      if (isNaN(fuelLevel.value) ||  isNaN(cargoMass.value)) {
         alert("Fuel Level and Cargo Mass must be numbers");
         //event.preventDefault();
      } // end of if statment
      
//to do: the div with id faultyItems should be updated if something is not ready for launch.
//1 -use template literals to updte the li elements pilotStatus and copilot status to include their names
      ////create function for what to put in launchStatus
      showElement();  //calling the function I just wrote? maybe?
   document.getElementById("pilotStatus").innerHTML = `Pilot ${pilotName.value} is ready for launch`
   document.getElementById("copilotStatus").innerHTML = `Copilot ${copilotName.value} is ready for launch`

//2 - if the user submits a fuel level below 10,000 liters, change faultyItems to visible and update fuel status th say "There is not enough fuel for the journey 
// and the text of the h2 element launchStatus should change to "Shuttle not ready for launch" and color change to red
   if (fuelLevel < 10000){
      document.getElementById("launchStatus") = "Shuttle not ready for launch"
      
   }//end of visibility function...that doesn't work....I don't guess
   

//} else {
 // it would be ready to launch and fuel level would be ready for launch
//}  //end of if statement

//3 -If the user submits a cargo mass that is over 10000 kilogras, change the list to visible
//update the cargo status stating :there is too mch mass for take oof" and change launchStatus to
//"Shuttle not ready for launch" and color changes to red

//4 - If the shuttle is ready to launch, change the text of launchStatus to green and display "Shuttle is ready for launch"




   }); //end of form event listener function
}); //end of load function


/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/
