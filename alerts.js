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