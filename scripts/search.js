// ----------------------------------------Search by Location------------------------------------------------------------------------------------
let locationLength = locationsArray.length;
let nationalParksLength = nationalParksArray.length;

const locationDropDown = document.getElementById("location");
for (let i = 0; i < locationLength; i++) {
  let locations = document.createElement("option");
  locations.textContent = nationalParksArray[i].State;
  location.value = nationalParksArray[i].State;
  locationDropDown.appendChild(locations);
}

function collectValue() {
  let inputValue = document.getElementById("location").value;
  alert(inputValue);
}

let searchResults = [];

document.onchange = function clickAndLoad() {
    searchResults = [];
  for (let i = 0; i < nationalParksLength; i++) {
    let inputValue = document.getElementById("location").value;
    if (nationalParksArray[i].State == inputValue) {
      searchResults.push(nationalParksArray[i]); 
      console.log(searchResults)
      console.log(searchResults.length)
      
    }
  }
};

//searchResults = [];


//trying to find utah so i can see whether or not i can find a property in an object with a find(); doesnt work
// let results = nationalParksArray.State.find(function(element) {
//     if (element == "Utah") {
//         console.log ("yuh");
//     }
// });
// let side = locationsArray.length

// console.log(results)
// -------------------------------------------Search by Park Type-------------------------------------------------------------------------
let parkTypeLength = parkTypesArray.length;

const parkTypeDropDown = document.getElementById("parkType");
for (let i = 0; i < parkTypeLength; i++) {
  let parkTypes = document.createElement("option");
  parkTypes.textContent = parkTypesArray[i];
  parkTypes.value = parkTypesArray[i];
  parkTypeDropDown.appendChild(parkTypes);
}

function seeValue() {
  let inputValue = document.getElementById("parkType").value;
  alert(inputValue);
}
