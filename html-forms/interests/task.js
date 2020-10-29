const allCheckboxes = document.querySelectorAll('.interest__check');


allCheckboxes.forEach((item) => {
    item.addEventListener('click', (e) => {

        const subs = item.closest('label').nextElementSibling;
        const subsChecks = subs.querySelectorAll('.interest__check');

        if(item.checked) {
            subsChecks.forEach((child) => {
                child.checked = true;
            });
        }
        else {
            subsChecks.forEach((child) => {
                child.checked = false;
            });
        }

    });
});