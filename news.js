function displayData() {
  let input1 = document.getElementById("input1").value;
  let input2 = document.getElementById("input2").value;
  let input3 = document.getElementById("input3").files[0];

  let outputDiv = document.getElementById("output");
  outputDiv.innerHTML = "";
  let outputP = document.createElement("p");

  outputP.textContent = input1 + input2;

  if (input3) {
    let outputImg = document.createElement("img");
    outputImg.src = URL.createObjectURL(input3);
    outputImg.alt = "Image from input";
    outputDiv.appendChild(outputImg);
  }

  outputDiv.appendChild(outputP);

  document.getElementById("input1").value = "";
  document.getElementById("input2").value = "";
  document.getElementById("input3").value = "";
}
