let portHeader = document.getElementById("portfolioHeader");
let aboutHeader = document.getElementById("aboutHeader");

document.querySelector("#about").addEventListener("mouseover", () => {
    aboutHeader.style.wordWrap = "normal";

})
document.querySelector("#about").addEventListener("mouseout", () => {
    aboutHeader.style.wordWrap = "break-word";

})

document.querySelector("#portfolio").addEventListener("mouseover", () => {
    portHeader.style.wordWrap = "normal";

})
document.querySelector("#portfolio").addEventListener("mouseout", () => {
    portHeader.style.wordWrap = "break-word";

})


function changeToNormal (element) {
    element.style[overflow-wrap] = "normal";

}
