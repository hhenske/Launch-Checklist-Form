
// Write your JavaScript code here!

//to do - write set up even handler that runs when the form's submit event is triggered: 1stline should have preventDefault
window.addEventListener("load", function() {
   let form = this.document.querySelector("form");
   form.addEventListener("submit",function(event) {
      let pilotName = document.querySelector("input[name=pilotName]");
      let copilotName = document.querySelector("input[name=copilotName]");
      let fuelLevel = document.querySelector("input[name=fuelLevel]");
      let cargoMass = document.querySelector("input[name=cargoMass]");
      
      if (pilotName.value === "" || copilotName.value === "" || fuelLevel.value === ""
      || cargoMass.value === "" ) {
         alert("All fields are required!");
         event.preventDefault();
      }
      
//got code below from W3 schools
      function allLetter(inputText) {
         var letters = /^[A-Za-z]+$/;
         if (inputText.value.match(letters)) {
            return true
         } else {
            alert("Names should be all letters");
         }
      }
      allLetter(pilotName);
      allLetter(copilotName);
   
      
      if (isNaN(fuelLevel.value) ||  isNaN(cargoMass.value)) {
         alert("Fuel Level and Cargo Mass must be numbers");
         event.preventDefault();
      }
      
   });
});
//to do: the div with id faultyItems should be updated if something is not ready for launch.
//1 -use template literals to updte the li elements pilotStatus and copilot status to include their names
      ////create function for what to put in launchStatus
document.getElementById("faultyItems").innerHTML = `
<li id = "pilotStatus">${pilotName.value}</li>
<li id = "copilotStatus">${copilotName.value}</li>
`



//2 - if the user submits a fuel level below 10,000 liters, change faultyItems to visible and update fuel status th say "There is not enough fuel for the journey 
// and the text of the h2 element launchStatus should change to "Shuttle not ready for launch" and color change to red

//3 -If the user submits a cargo mass that is over 10000 kilogras, change the list to visible
//update the cargo status stating :there is too mch mass for take oof" and change launchStatus to
//"Shuttle not ready for launch" and color changes to red

//4 - If the shuttle is ready to launch, change the text of launchStatus to green and display "Shuttle is ready for launch"

//</div>

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
