// const tabElems =  Array.from(document.querySelectorAll('.tab'));
// const content = Array.from(document.querySelectorAll('.tab__content'));

// function getTabIndex() {
//     return tabElems.findIndex(a => a.classList.contains('tab_active'));
// };

// function getContentIndex() {
//     return content.findIndex(a => a.classList.contains('tab__content_active'));
// };

// for (let tabIndex in tabElems) {
//     tabElems[tabIndex].addEventListener('click', () => {

//        tabElems[getTabIndex()].classList.remove('tab_active');
//        tabElems[tabIndex].classList.add('tab_active');

//        content[getContentIndex()].classList.remove('tab__content_active');
//        content[tabIndex].classList.add('tab__content_active');
//     });
// };

// I think, that it more clear variant
const elemTabs = document.querySelectorAll('.tab');
const elemContent = document.querySelectorAll('.tab__content');

elemTabs.forEach((item) =>
    item.addEventListener('click', (e) => {

        elemTabs.forEach(
            (child) => child.classList.remove('tab_active')
        );
        elemContent.forEach(
            (child) => child.classList.remove('tab__content_active')
        );

        item.classList.add('tab_active');
        
        const indexTab = Array.from(document.querySelectorAll('.tab')).indexOf(item);
        
        elemContent.forEach((child, index) => {
            if(index == indexTab) {
                child.classList.add('tab__content_active');
            }
        });

    })

);
