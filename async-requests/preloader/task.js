const getMoney = function() {
    const xhr = new XMLHttpRequest();
    const url = 'https://netology-slow-rest.herokuapp.com';
    xhr.open('GET', url);
    xhr.responseType = 'json';
    xhr.send();

    xhr.addEventListener('readystatechange', function(e) {
        if(xhr.readyState === 4 && xhr.status === 200) {
            document.getElementById('loader').classList.remove('loader_active');
            const valute = xhr.response.response.Valute;
            for(elem in valute) {
                document.querySelector('#items').innerHTML +=
                `
                <div class="item">
                    <div class="item__code">${valute[elem].CharCode}</div>
                    <div class="item__value">${valute[elem].Value}</div>
                    <div class="item__currency">руб.</div>
                </div>
                `
            };
        };
    });
};

window.addEventListener('DOMContentLoaded', function(e) {
    getMoney();
});


