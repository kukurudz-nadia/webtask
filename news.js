function displayData() {
  // Get the input values
  let input1 = document.getElementById("input1").value;
  let input2 = document.getElementById("input2").value;
  let input3 = document.getElementById("input3").files[0];

  // Create a new paragraph element to display the data
  let outputDiv = document.getElementById("output");
  outputDiv.innerHTML = ""; // clear any existing content
  let outputP = document.createElement("p");

  // Add the text inputs to the paragraph
  outputP.textContent = input1 + input2;
  // If an image was selected, add it to the paragraph
  if (input3) {
    let outputImg = document.createElement("img");
    outputImg.src = URL.createObjectURL(input3);
    outputImg.alt = "Image from input";
    outputDiv.appendChild(outputImg);
  }

  // Add the paragraph to the output div
  outputDiv.appendChild(outputP);
}
