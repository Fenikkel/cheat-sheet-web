const container = document.querySelector("#container");

// Example
/*
const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";

container.appendChild(content);
*/

// RED PARAGRAPH
const redText = document.createElement("p");
redText.textContent = "Red <p>";
redText.style.color = "red";

container.appendChild(redText);


// BLUE HEADER 3
const blueHeader = document.createElement("h3");
blueHeader.textContent = "Blue <h3>";
blueHeader.classList.add("blue-italic");

container.appendChild(blueHeader);


// DIV WITH CHILDS
const divParent = document.createElement("div");
divParent.style.cssText = "border: 2px solid black; background: pink;";

const headerChild = document.createElement("h1");
headerChild.textContent = "<h1> inside the div"
headerChild.setAttribute("style", "color: green; text-decoration: underline;");

const paragraphChild = document.createElement("p");
paragraphChild.textContent = "<p> inside the div"

divParent.appendChild(headerChild);
divParent.appendChild(paragraphChild);

container.appendChild(divParent);