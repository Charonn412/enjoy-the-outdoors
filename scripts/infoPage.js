
// <------------------------------------------------------Info Page--------------------------------------------------------------->
let mountainsLength = mountainsArray.length
// for (let i = 0; i < length; i++) {
//   let mountainNames = (mountainsArray[i].name);
//   console.log(mountainNames);
// }

const mountainDropDown = document.getElementById('mountainNames');
for(let i = 0; i < mountainsLength; i++) {
    let mountains = document.createElement('option');
    mountains.textContent = mountainsArray[i].name;
    mountains.value = mountainsArray[i].name;
    mountainDropDown.appendChild(mountains)
}

function getValue() {
    let inputValue = document.getElementById('mountainNames').value;
    alert(inputValue)// lets me know that i have a hold of each input value
}






