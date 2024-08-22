// Create a new element
let newParagraph = document.createElement("p");
newParagraph.innerHTML = "This is a newly created paragraph.";

// Append the new element to the container
let container = document.getElementById("container");
container.appendChild(newParagraph);

// Replace the old paragraph with a new one
let oldParagraph = document.getElementById("oldParagraph");
let replacementParagraph = document.createElement("p");
replacementParagraph.innerHTML = "This paragraph replaced the old one.";
container.replaceChild(replacementParagraph, oldParagraph);

// Remove the newly appended paragraph
container.removeChild(newParagraph);

// Write directly to the document (not recommended after the page has loaded)
document.write("<p>This is written by document.write</p>");