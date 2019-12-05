

$(document).ready(function(){
    var speed = 600;
    console.log('load xong HTML');
    $('.accordionMenu').slideUp(speed);
    $('.accordionBtn').click(function(event){
                event.preventDefault();
                if($(this).next()[0].style.display == 'none'){
                $(this).parent().parent().find('li').find('ul').slideUp(speed);
                $(this).next().slideDown(speed);
                } else $(this).next().slideUp(speed);
            })
})
