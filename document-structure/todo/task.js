const tasksPostElem = document.querySelector('.tasks');
const textInput = document.querySelector('.tasks__input');
const taskVisualElem = document.querySelector('.tasks__list');

let objArr = [];

tasksPostElem.addEventListener('click', (e) => {
    if(e.target.id == 'tasks__input') {
        e.target.addEventListener('keyup', (e) => {

            if(e.code == 'Enter') {
                if(e.target.value) {
                    taskVisualElem.innerHTML +=
                    `
                    <div class="task">
                        <div class="task__title">
                            ${e.target.value}
                        </div>
                        <a href="#" class="task__remove">&times;</a>
                    </div>
                    `;

                    e.target.value = null;
                }
            }
        });
    }
    else if (e.target.id == 'tasks__add') {

        if(textInput.value) {
            taskVisualElem.innerHTML +=
            `
            <div class="task">
                <div class="task__title">
                    ${textInput.value}
                </div>
                <a href="#" class="task__remove">&times;</a>
            </div>
            `;

            textInput.value = null;
        }
    }

    else if (e.target.className == 'task__remove') {
        e.target.parentElement.remove();
    }

});

