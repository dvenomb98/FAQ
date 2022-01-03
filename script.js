$(document).ready(function(){
    var nadpis = $('.nadpis');
    nadpis.on('click', function () {
        $(this).siblings().slideToggle()
        $(this).closest(".faq-text").find(".on")
               .add($(this).find(".off"))
               .toggleClass("off on")
        nadpis.not(this).siblings().slideUp();
    });
});