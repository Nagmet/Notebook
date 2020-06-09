
function testWebP(callback) {
    var webP = new Image(); 
    webP.onload = webP.onerror = function () { 
        callback(webP.height == 2); };
        webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {
    if (support == true) { 
        document.querySelector('body').classList.add('webp'); 
    }else{ document.querySelector('body').classList.add('no-webp'); 
}
});

$(document).ready(function () {
    $('.menu__btn').click(function (event) {
        $('.menu__btn, .header__list').toggleClass('active');
    });
});

$(document).ready(function () {
    $('.slidershow').slick();
});