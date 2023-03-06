let comments = [];
let commentId = 1;

function addComment() {
    const commentInput = document.getElementById("comment");
    const comment = commentInput.value.trim();

    if (comment.length > 0) {
        const date = new Date().toLocaleString();
        const commentObject = { id: commentId, comment: comment, date: date };
        comments.push(commentObject);
        commentId++;
        commentInput.value = "";
        displayComments();
    }
}

function displayComments() {
    const commentList = document.getElementById("commentsList");
    commentList.innerHTML = "";

    for (let i = 0; i < comments.length; i++) {
        const comment = comments[i];
        const commentElement = document.createElement("div");
        commentElement.innerHTML = `<p>${comment.comment}</p><small>${comment.date}</small>`;
        commentList.appendChild(commentElement);
    }
}
