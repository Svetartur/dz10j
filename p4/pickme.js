const commentForm = document.getElementById('comment-form');
const commentsList = document.getElementById('comments-list');

commentForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const usernameInput = document.getElementById('username');
    const textInput = document.getElementById('comment-text');

    const now = new Date();
    const dateString = `${now.getDate()}.${now.getMonth() + 1}.${now.getFullYear()} ${now.getHours()}:${String(now.getMinutes()).padStart(2, '0')}`;

    const commentItem = document.createElement('div');
    commentItem.className = 'comment-item';

    const commentHeader = document.createElement('div');
    commentHeader.className = 'comment-header';
    commentHeader.textContent = usernameInput.value;

    const commentDate = document.createElement('span');
    commentDate.className = 'comment-date';
    commentDate.textContent = dateString;

    const commentText = document.createElement('div');
    commentText.className = 'comment-text';
    commentText.textContent = textInput.value;

    commentHeader.append(commentDate);
    commentItem.append(commentHeader, commentText);
    commentsList.append(commentItem);

    usernameInput.value = '';
    textInput.value = '';
});