let length = mountainsArray.length
// for (let i = 0; i < length; i++) {
//   let mountainNames = (mountainsArray[i].name);
//   console.log(mountainNames);
// }

const mountainDropDown = document.getElementById('mountainNames');
for(let i = 0; i < length; i++) {
    let mountains = document.createElement('option');
    mountains.textContent = mountainsArray[i].name;
    mountainDropDown.appendChild(mountains)
}
