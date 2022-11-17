// <------------------------------------------------------Info Page--------------------------------------------------------------->
let mountainsLength = mountainsArray.length;
// for (let i = 0; i < length; i++) {
//   let mountainNames = (mountainsArray[i].name);
//   console.log(mountainNames);
// }

const mountainDropDown = document.getElementById("mountainNames");
for (let i = 0; i < mountainsLength; i++) {
  let mountains = document.createElement("option");
  mountains.textContent = mountainsArray[i].name;
  mountains.value = mountainsArray[i].name;
  mountainDropDown.appendChild(mountains);
}

function getValue() {
  let inputValue = document.getElementById("mountainNames").value;
  // alert(inputValue); // lets me know that i have a hold of each input value
}

let infoSearchResults = [];

function arrayInfoElements(mountains) {
  return `<p>${mountains.name} has an elevation of ${mountains.elevation} and a ${mountains.effort} effort. <br><br> <p>${mountains.desc}</p> <br> The lattiude is ${mountains.coords.lat} and the longitude is ${mountains.coords.lng}</p> <br>  <p><img src=assets/images/${mountains.img} /> </p> `;
}

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




// function displayImg() {
//     for (var i = 0; i < boldStuffs.length; i += 1) {
//         infoSearchResults[i].innerHTML = mountains.name + '<img src="'+ mountain.image+'">';
//     }
// }


