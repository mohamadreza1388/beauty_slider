$(function () {
    $("#container>#right>.slider").bxSlider({
        mode: 'horizontal',
        infiniteLoop: true,
        pager: true,
        control: false,
        nextSelector: '#next-btn',
        prevSelector: '#prev-btn',
        nextText: '<i class="fa-solid fa-angle-right"></i>',
        prevText: '<i class="fa-solid fa-angle-left"></i>',
    })
    $("#container>#left>.slider").bxSlider({
        mode: 'horizontal',
        infiniteLoop: true,
        pager: true,
        control: false,
        nextSelector: '#next-slide',
        prevSelector: 'not',
        nextText: '<i class="fa-solid fa-arrow-left"></i>',
    })
})