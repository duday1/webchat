document.getElementById('Uday-send').addEventListener('click', function() {
    sendMessage('Uday', 'Uday');
});

document.getElementById('Uday').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        sendMessage('Uday', 'Uday');
    }
});

document.getElementById('Lakshmi-send').addEventListener('click', function() {
    sendMessage('Lakshmi', 'Lakshmi');
});

document.getElementById('Lakshmi').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        sendMessage('Lakshmi', 'Lakshmi');
    }
});

document.getElementById('Kannaya-send').addEventListener('click', function() {
    sendMessage('Kannaya', 'Kannaya');
});

document.getElementById('Kannaya').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        sendMessage('Kannaya', 'Kannaya');
    }
});

function sendMessage(inputId, user) {
    const inputField = document.getElementById(inputId);
    const fileField = document.getElementById(inputId + '-file');
    const chatBox = document.getElementById('chat-box');

    const message = inputField.value.trim();
    const file = fileField.files[0];

    if (message || file) {
        const messageElement = document.createElement('div');
        messageElement.classList.add('message');

        // Add the sender's name
        const senderInfo = document.createElement('strong');
        senderInfo.textContent = `${user}: `;
        messageElement.appendChild(senderInfo);

        // Add text message if available
        if (message) {
            const textMessage = document.createElement('span');
            textMessage.textContent = message;
            messageElement.appendChild(textMessage);
        }

        // Add file link if a file is selected
        if (file) {
            const fileLink = document.createElement('a');
            fileLink.href = URL.createObjectURL(file);
            fileLink.download = file.name;
            fileLink.textContent = `📎 ${file.name}`;
            fileLink.style.display = 'block';
            messageElement.appendChild(fileLink);

            // If it's an image, display it directly
            if (file.type.startsWith('image/')) {
                const img = document.createElement('img');
                img.src = URL.createObjectURL(file);
                img.style.maxWidth = '100%';
                img.style.marginTop = '5px';
                messageElement.appendChild(img);
            }
        }

        chatBox.appendChild(messageElement);
        chatBox.scrollTop = chatBox.scrollHeight;

        // Clear inputs after sending
        inputField.value = ''; 
        fileField.value = '';
    }
}
