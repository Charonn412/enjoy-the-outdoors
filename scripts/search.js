let locationLength = locationsArray.length

const locationDropDown = document.getElementById('location');
for(let i = 0; i < locationLength; i++) {
    let locations = document.createElement('option');
    locations.textContent = locationsArray[i];
    location.value = locationsArray[i];
    locationDropDown.appendChild(locations)
}

function collectValue() {
    let inputValue = document.getElementById('location').value;
    alert(inputValue)
}

let parkTypeLength = parkTypesArray.length;

const parkTypeDropDown = document.getElementById('parkType');
for(let i = 0; i < parkTypeLength; i++) {
    let parkTypes = document.createElement('option');
    parkTypes.textContent = parkTypesArray[i];
    parkTypes.value = parkTypesArray[i];
    parkTypeDropDown.appendChild(parkTypes);
}

function seeValue() {
    let inputValue = document.getElementById('parkType').value;
    alert(inputValue)
}