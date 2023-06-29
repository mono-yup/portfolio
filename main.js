let portHeader = document.getElementById("portfolioHeader");
let aboutHeader = document.getElementById("aboutHeader");

document.querySelector("#about").addEventListener("mouseover", () => {
    aboutHeader.classList.replace("oneLineText", "oneLineTextNormal");

})
document.querySelector("#about").addEventListener("mouseout", () => {
    aboutHeader.classList.replace("oneLineTextNormal","oneLineText");

})

document.querySelector("#portfolio").addEventListener("mouseover", () => {
    portHeader.classList.replace("oneLineText", "oneLineTextNormal");

})
document.querySelector("#portfolio").addEventListener("mouseout", () => {
    portHeader.classList.replace("oneLineTextNormal","oneLineText");

})
