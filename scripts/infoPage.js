// <------------------------------------------------------Info Page--------------------------------------------------------------->
let mountainsLength = mountainsArray.length;

const mountainDropDown = document.getElementById("mountainNames");
//empty array for filtered results to be push into
let infoSearchResults = [];

//adds mountain options to select > options tag
for (let i = 0; i < mountainsLength; i++) {
  let mountains = document.createElement("option");
  mountains.textContent = mountainsArray[i].name;
  mountains.value = mountainsArray[i].name;
  mountainDropDown.appendChild(mountains);
}

//function to get value but is eventually redeclared
function getValue() {
  let inputValue = document.getElementById("mountainNames").value;
}

//how my infomation is displayed
function arrayInfoElements(mountains) {
  return `<p>${mountains.name} has an elevation of ${mountains.elevation} and a ${mountains.effort} effort. <br><br> <p>${mountains.desc}</p> <br> The lattiude is ${mountains.coords.lat} and the longitude is ${mountains.coords.lng}</p> <br>  <p><img src=assets/images/${mountains.img} /> </p> `;
}

//filtering and pushing results in empty array and onto page
document.onchange = function clickAndLoadInfo() {
  infoSearchResults = [];
  for (let i = 0; i < mountainsLength; i++) {
    let infoValue = document.getElementById("mountainNames").value;
    if (mountainsArray[i].name == infoValue) {
      infoSearchResults.push(mountainsArray[i]);
      console.log(infoValue);
      console.log(infoValue.length);
      document.getElementById("showArray").innerHTML =
        infoSearchResults.map(arrayInfoElements);
    }
  }
};



