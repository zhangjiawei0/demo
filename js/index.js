$(function(){
    $('.swiper-container').css('height',$(document).height() + 'px');

    for (var i = 0; i < $('.swiper-slide').length; i++) {
        $('.swiper-slide').eq(i).css('background-image',$('.swiper-slide').eq(i).attr('data-url'));
    }

    $('.audio').on('click',function() {
        if($('#media')!==null){
            if($('#media').paused){
                $('#media').get(0).play();
                $(this).addClass('play');
            }else{
               $('#media').get(0).pause();
               $(this).removeClass('play');
            }
        }
    })

    var mySwiper = new Swiper('.swiper-container', {
        mode: 'vertical',
        loop: true,
    })

    var c = $('#myCanvas');
    c.width = $(document).width();
    c.height = $(document).height();
    c.attr('width',c.width);
    c.attr('height',c.height);
    var ctx = c.get(0).getContext("2d");
    var img = new Image();  
    img.src = "images/B12.jpg";
    img.onload = function(e){
        e.preventDefault();
        ctx.drawImage(img, 0, 0, c.width, c.height);  
    }
})
