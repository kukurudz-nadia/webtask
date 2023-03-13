var previewImage = function (event) {
  var output = document.getElementById('output');
  output.src = URL.createObjectURL(event.target.files[0]);
  output.onload = function () {
    URL.revokeObjectURL(output.src)
  }
};

function displayData() {
  let input1 = document.getElementById("input1").value;
  let input2 = document.getElementById("input2").value;

  if (input1.trim().length < 1 || input2.trim().length < 1) {
    showAlert('Please fill the inputs')
  }
  else {
    showAlertAndClearInputs(input1.trim(), input2.trim())
  }
}

function showAlert(text) {
  alert(text);
}

function showAlertAndClearInputs(title, text) {
  showAlert('Article with title ' + title + ' and text ' + text + ' has been added.')

  document.getElementById("input1").value = "";
  document.getElementById("input2").value = "";

  var output = document.getElementById('output');
  output.src = 'default.png';
}