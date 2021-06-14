// Write your JavaScript code here!

//to do - write set up even handler that runs when the form's submit event is triggered: 1stline should have preventDefault
window.addEventListener("load", function() {
   let form = this.document.querySelector("form");
   form.addEventListener("submit",function(event) {
      let pilotName = document.querySelector("input[name=pilotName]");
      let copilotName = document.querySelector("input[name=copilotName]");
      let fuelLevel = Number(document.querySelector("input[name=fuelLevel]"));
      let cargoMass = Number(document.querySelector("input[name=cargoMass]"));
      
      if (pilotName.value === "" || copilotName.value === "" || fuelLevel.value === ""
      || cargoMass.value === "" ) {
         alert("All fields are required!");
         event.preventDefault();
      }
      

      if (typeof pilotName.value != String || typeof copilotName.value != String ) {
         alert("Names need to be letters only");
         event.preventDefault();
      }
      //The above code runs EVEN if the pilot and copilot names are letters
      
      // if (typeof fuelLevel.value != Number || typeof cargoMass != Number) {
      //    alert("Fuel Level and Cargo Mass must be numbers");
      //    event.preventDefault();
      // }

   
      
   });
});

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
