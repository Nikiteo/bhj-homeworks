const poll = document.querySelector('.poll');
const pollTitle = document.getElementById('poll__title');
const pollQuestions = document.getElementById('poll__answers');
let pollID = null;
let sumVotes = null;
let arrAnswers = [];

const getPoll = function() {
    const xhr = new XMLHttpRequest();
    const url = 'https://netology-slow-rest.herokuapp.com/poll.php';
    xhr.open('GET', url);
    xhr.responseType = 'json';
    xhr.send();

    xhr.addEventListener('readystatechange', function(e) {
        if(xhr.readyState === 4 && xhr.status === 200) {
            const request = xhr.response;
            pollTitle.innerText = request.data.title;
            request.data.answers.forEach((item, index) => {
                pollQuestions.innerHTML += 
                `
                <button class="poll__answer" data-id="${index}">
                ${item}
                </button>
                `;
            });

            pollID = this.response.id;
            clicksPollAnswer(); //функция - обработчик кликов
        };
    });
};

const clicksPollAnswer = function() {
    //обрабатываем клики по вариантам ответов на опрос
    document.querySelectorAll('.poll__answer').forEach((item) => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector('.modal').classList.add('modal_active');
            poll.style.backgroundColor = 'grey';
            postAnswer(e.target.dataset.id); //функция - отправки информации на сервер
        });
    });

    //обрабатываем клик по крестику
    document.querySelector('.modal_close').addEventListener('click', function(e) {
        e.preventDefault();
        this.closest('.modal').classList.remove('modal_active');
        poll.style.backgroundColor = 'inherit';
        pollQuestions.classList.remove('poll__answers_active');
        
        //создаем элемент - div для статистики
        let statAnswers = document.createElement('div');
        statAnswers.classList.add('poll_statistic');
        poll.append(statAnswers);

        //пробегаем по всем значениям массива arrAnswers и создаем доп.элементы
        arrAnswers.forEach((item) => {
            let answerTitle = document.createElement('div');
            answerTitle.classList.add('answer_title');
            answerTitle.style.display = 'flex';
            answerTitle.style.marginTop = 10 + 'px';
            answerTitle.innerText = item.answer + ':';
    
            let answerPercent = document.createElement('div');
            answerPercent.classList.add('answer_percent');
            answerPercent.style.marginLeft = 10 + 'px';
            answerPercent.innerText = item.percent + '%';
            answerPercent.style.fontWeight = 'bold';

            statAnswers.append(answerTitle);
            answerTitle.append(answerPercent);
        });
    });
};

/**
 * id - dataset.id from pollQuestions children
 * @param {number} id 
 */

const postAnswer = function(id) {
    const xhr = new XMLHttpRequest;
    const url = 'https://netology-slow-rest.herokuapp.com/poll.php';
    xhr.open('POST', url);
    xhr.responseType = 'json';
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhr.send(`vote=${pollID}&answer=${id}`);

    xhr.addEventListener('readystatechange', function(e) {
        if(xhr.readyState === 4 && xhr.status === 200) {
            xhr.response.stat.forEach((item) => {
                sumVotes += item.votes;
            });
            xhr.response.stat.forEach((item) => {
                let obj = {};
                obj.answer = item.answer;
                obj.percent = Number(100 * item.votes / sumVotes).toFixed(2);
                arrAnswers.push(obj);
            });
        };
    });
};

window.addEventListener('DOMContentLoaded', function(e) {
    getPoll();
});

