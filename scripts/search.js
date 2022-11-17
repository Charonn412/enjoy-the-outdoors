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
}

const searchList = document.getElementById("searchList");

let searchResults = [];

function arrayElements(parks) {
  return ` <p> Park Name: ${parks.LocationName} || Address: ${parks.Address} || City: ${parks.City} || State: ${parks.State} || Zipcode: ${parks.ZipCode} || Phone: ${parks.Phone} || Latitude: ${parks.Latitude} || Longitude: ${parks.Longitude} <p> `;
}

document.onchange = function clickAndLoad() {
  searchResults = [];
  for (let i = 0; i < nationalParksLength; i++) {
    let inputValue = document.getElementById("location").value;
    if (nationalParksArray[i].State == inputValue) {
      searchResults.push(nationalParksArray[i]);
      console.log(searchResults);
      console.log(searchResults.length);
      document.getElementById("printArray").innerHTML =
        searchResults.map(arrayElements).join( );
    }
  }
};


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
}

let searchResultsParkType = [];

function arrayElementsParksType(parksType) {
  return ` <li> ${parksType.LocationName} <li> 
  `;
}

// contains()
// filter method


//working but not together
// document.onchange = function clickAndLoadParkType() {
//   let inputValueParksType = document.getElementById("parkType").value;
//   let filterByTypeArray = nationalParksArray.filter((parkType) => {
//     return parkType.LocationName.includes(inputValueParksType);
//   });
//   document.getElementById("printParkTypeArray").innerHTML =
//     filterByTypeArray.map(arrayElementsParksType);
// };


















/* for (let i = 0; i < nationalParksLength; i++) {
    console.log(inputValueParksType);

    if (filterByType.length > 0) {
      searchResultsParkType.push(nationalParksArray[i]);
      console.log(searchResultsParkType);
      console.log(searchResultsParkType.length);
      document.getElementById("printParkTypeArray").innerHTML =
        searchResultsParkType.map(arrayElementsParksType);
    }
  } */

// nationalParksArray.forEach((parkType) => {
//   if (parkType.LocationName.includes(inputValueParksType)))

// };

// document.onchange = function clickAndLoadParkType() {
//   searchResultsParkType = [];
//   let similarSearch = nationalParksArray.filter((arrayValue) =>
//   arrayValue.nationalParksArray(inputValueParksType));
//   for (let i = 0; i < nationalParksLength; i++) {
//     let inputValueParksType = document.getElementById("parkType").value;

//     if (inputValueParksType) {
//       searchResultsParkType.push(nationalParksArray[i]);
//       console.log(searchResultsParkType);
//       console.log(searchResultsParkType.length);
//       document.getElementById("printParkTypeArray").innerHTML =
//         searchResultsParkType.map(arrayElementsParksType);
//     }
//   }
// };

// Which candies has "M&M" its name?
// let mmCandies = products.filter((arrayValue) =>
//   arrayValue.product.includes("M&M")
// );
// console.log(mmCandies);
