const chatWindow = document.querySelector('.chat-widget');
const messagesWindow = document.querySelector('.chat-widget__messages');
const printWindow = document.querySelector('.chat-widget__input');
const messagesArea = document.querySelector('.chat-widget__messages-container');

const robotAnswers = [
    "Здравствуйте, чем я могу Вам помочь?",
    "Меня зовут Лекс",
    "Почему Вы грубите мне?",
    "До свидания!"
];

const currentDate = new Date();
const currentHours = currentDate.getHours();
const currentMinutes = currentDate.getMinutes();
let timeToShow = (currentMinutes <= 9) ? `${currentHours}:0${currentMinutes}` : `${currentHours}:${currentMinutes}`;

chatWindow.addEventListener('click', (e) => {
    chatWindow.classList.add('chat-widget_active');
    setTimeout(
        function() {
            messagesWindow.innerHTML += 
            `
            <div class="message">
                <div class="message__time">${timeToShow}</div>
                <div class="message__text">
                    ${robotAnswers[0]}
                </div>
            </div>
            `;
        }
    , 30000);
});

printWindow.addEventListener('keyup', (e) => {
    if(e.code == 'Enter') {
        if(e.target.value) {
            messagesWindow.innerHTML += 
            `
            <div class="message message_client">
                <div class="message__time">${timeToShow}</div>
                <div class="message__text">
                    ${e.target.value}
                </div>
            </div>
            `;
    
            e.target.value = null;

            let robotRandomAnswer = Math.floor(Math.random() * robotAnswers.length);

            messagesWindow.innerHTML += 
            `
            <div class="message">
                <div class="message__time">${timeToShow}</div>
                <div class="message__text">
                    ${robotAnswers[robotRandomAnswer]}
                </div>
            </div>
            `;

            messagesArea.scrollTop = messagesArea.scrollHeight;
        }
    }
});
