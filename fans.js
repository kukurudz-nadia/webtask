// function displayText() {
//   var inputText = document.getElementById("text-field").value;
//   document.getElementById("output").innerHTML = inputText;
//   document.getElementById("text-field").value = "";
// }
let messages = [];

function addComment() {
    const commentInput = document.getElementById("comment");
    const comment = commentInput.value.trim();

    if (comment.length > 0) {
        mcomment.push(comment);
        commentInput.value = "";
        displayComments();
    }
}

function displayComments() {
    const commentList = document.getElementById("commentsList");
    commentList.innerHTML = "";

    for (let i = 0; i < comment.length; i++) {
        const comment = comments[i];
        const commentElement = document.createElement("div");
        commentElement.textContent = comment;
        commentList.appendChild(commentElement);
    }
}
