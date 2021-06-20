//event handler that runs when the form's submit event is triggered
window.addEventListener("load", function() {
   //event.preventDefault();
   //json section (might need to go up top)
   let json = [];
   fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response){
      response.json().then(function(json) {
         const div = document.getElementById("missionTarget");
         div.innerHTML = `<h2>Mission Destination</h2>
         <ol>
            <li>Name: ${json[0].name}</li>
            <li>Diameter: ${json[0].diameter}</li>
            <li>Star: ${json[0].star}</li>
            <li>Distance from Earth: ${json[0].distance}</li>
            <li>Number of Moons: ${json[0].moons}</li>
      </ol>
      <img src=${json[0].image}></img>
         
         `
      }) //end of response function
   }) //end of json function
   
   function showLaunchStatus() {
      faultyItems = document.getElementById("faultyItems");
      faultyItems.style.visibility = 'visible';
   } //end of function

   function hideLaunchStatus() {
      faultyItems = document.getElementById("faultyItems");
      faultyItems.style.visibility = 'hidden';
   }

   function redLaunchStatus() {
      launchStatus = document.getElementById("launchStatus");
      launchStatus.style.color = 'red';
   }

   function greenLaunchStatus() {
      launchStatus = document.getElementById("launchStatus");
      launchStatus.style.color = 'green';
   }


   function isEmptyField(pilotName, copilotName, fuelLevel, cargoMass){
      return (pilotName.value === "" || copilotName.value === "" || fuelLevel.value === ""
      || cargoMass.value === "" );
   }
   function allLetter(inputText) {
      var letters = /^[A-Za-z]+$/;
      return (inputText.value.match(letters)); 
   }

   function allNumbers(fuelLevel, cargoMass) {
      return (isNaN(fuelLevel.value) || isNaN(cargoMass.value));
   }



   let form = this.document.querySelector("form");
   form.addEventListener("submit",function(event) {
      event.preventDefault();
      let pilotName = document.querySelector("input[name=pilotName]");
      let copilotName = document.querySelector("input[name=copilotName]");
      let fuelLevel = document.querySelector("input[name=fuelLevel]");
      let cargoMass = document.querySelector("input[name=cargoMass]");
         
      if (isEmptyField(pilotName, copilotName, fuelLevel, cargoMass) ) {
         alert("All fields required");
         hideLaunchStatus();
         document.getElementById("launchStatus").innerHTML = "Awaiting Information Before Launch"
         launchStatus.style.color = '';
      } else if (!allLetter(pilotName) || !allLetter(copilotName)) {
         alert("Names must use letters");
         hideLaunchStatus();
         document.getElementById("launchStatus").innerHTML = "Awaiting Information Before Launch"
         launchStatus.style.color = '';
      } else if (allNumbers(fuelLevel, cargoMass)) {
         alert("Fuel level and Cargo Mass must be numbers");
         hideLaunchStatus();
         document.getElementById("launchStatus").innerHTML = "Awaiting Information Before Launch"
         launchStatus.style.color = '';
      } else {
         showLaunchStatus(); 
         document.getElementById("pilotStatus").innerHTML = `Pilot ${pilotName.value} is ready for launch`
         document.getElementById("copilotStatus").innerHTML = `Copilot ${copilotName.value} is ready for launch`
         document.getElementById("fuelStatus").innerHTML = "Fuel level high enough for launch"
         document.getElementById("cargoStatus").innerHTML = "Cargo Mass is low enough for launch"

         if (fuelLevel.value > 10000 && cargoMass.value < 10000) {
            greenLaunchStatus();
            document.getElementById("launchStatus").innerHTML = "Shuttle is ready for launch"
            
         } else {
            redLaunchStatus();
            document.getElementById("launchStatus").innerHTML = "Shuttle not ready for launch"
            if (fuelLevel.value < 10000){
               document.getElementById("fuelStatus").innerHTML = "Fuel level NOT high enough for launch"

            }
            if (cargoMass.value > 10000) {
               document.getElementById("cargoStatus").innerHTML = "There is too much mass for take off"
            }
         } // end of if phrase
   
      }//end of big validation if phrases
      
   }); //end of form event listener function
}); //end of load function
      
