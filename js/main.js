const tabs = document.querySelector('.tabs .container');
tabs.addEventListener("click", function (e) {
    e.path.forEach(a => {
        if (a && a.classList && a.classList.contains('tab-item')) {
            document.querySelector('.tab-item.tab-border').classList.remove('tab-border');
            a.classList.add('tab-border');
            // console.log(a);
            document.querySelector(".tab-content-item.show").classList.remove('show');
            document.querySelector(`#${a.id}-content`).classList.add('show');
        }
        else {
            console.log("No, it issn't");
        }
    });

}, true)