//Вопрос №1 - как победить отображение (сначала формат ss, затем hh.mm.ss)
//Вопрос №2 - как сделать вывод alert-а при 00:00:00, а не 00:00:01?

const elemTimer = document.getElementById("timer");
let content = elemTimer.textContent;
const funcTimer = function() {
    const date = new Date(content * 1000).toISOString().substr(11, 8);
    content -= 1;
    elemTimer.textContent = date;

    if (content < 0) {
        alert("Вы победили в конкурсе!");
        download('download.txt', 'Test');
        content = 59; //как сделать тут зависимость, чтобы не было хардкодом записано, а выставлялось значение elemTimer.textContent повторно?
    }
}
setInterval(funcTimer, 1000);

function download(filename, text) {
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
}