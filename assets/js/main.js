$(function () {
    /* Change li from nav to active on click*/
    elems = document.getElementsByClassName('menu-option');

    for (let i = 0; i < elems.length; i++){
        
        elems[i].addEventListener('click', function() {
            hideAllContent();
            
            for(let j = 0; j < elems.length; j++){
                elems[j].classList.remove('active');
            }

            _id = ".content#" + elems[i].id;
            elem = document.querySelector(_id);
            elem.style.display = 'block';
            elems[i].classList.add('active');
        }, false);
    }

    function hideAllContent(){
        let elems = document.getElementsByClassName('content');
        for (let i = 0; i < elems.length; i++){
            elems[i].style.display = 'none';
        }
    }
});