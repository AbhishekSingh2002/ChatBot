    function sendMessage() {
  const userInput = document.getElementById('user-input').value;
  if (userInput.trim() !== '') {
    appendMessage('user', userInput);
    const botResponse = getBotResponse(userInput);
    appendMessage('bot', botResponse);
    document.getElementById('user-input').value = '';
  }
}

function appendMessage(sender, message) {
  const messagesDiv = document.getElementById('chat-messages');
  const messageDiv = document.createElement('div');
  messageDiv.classList.add(`${sender}-message`);
  messageDiv.textContent = message;
  messagesDiv.appendChild(messageDiv);

  messagesDiv.scrollTop = messagesDiv.scrollHeight;
}

function getBotResponse(userInput) {
  switch (userInput.toLowerCase()) {
    case 'what is sciastra?':
      return 'SciAstra is a cutting-edge scientific research plat form.';
    case 'How to use SciAstra?'.toLowerCase():
      return 'You can explore SciAstra by signing up on our website.';
    case 'Is sciAstra free?'.toLowerCase():
      return 'The answer is YES.';
      case 'What are the target students of Sciastra?'.toLowerCase():
        return 'at sciAstra, we guide students who want to become scientists and pursue research by helping them secure admissions in the top colleges';
        case 'How do I start preparing for IISER?'.toLowerCase():
        return 'If you are aiming to secure a seat in IISER, you need to start your preparation as early as possible, there are some of the tips that you can follow to start your preparation effectively';
        case 'Is the NEST exam harder than the NEET?'.toLowerCase():
          return 'According to experts, the difficulty level of NEST is moderate. On the other hand, NEET is tough. As compared to NEET, the difficulty level of NEST is much easier.';
          case 'Is Biology a compulsory in IISER Aptitude Test?'.toLowerCase():
            return 'Students need clarification on whether math or biology is compulsory or not. No, nothing is mandatory in IAT. You can just do math and biology or you can do physics and chemistry also.';
    default:
      return "I'm sorry, I don't understand. Ask me something about SciAstra!";
  }
}
