$(function(){
    $('.swiper-container').css('height',$(document).height() + 'px');

    for (var i = 0; i < $('.swiper-slide').length; i++) {
        $('.swiper-slide').eq(i).css('background-image',$('.swiper-slide').eq(i).attr('data-url'));
    }

    $('.audio').on('click',function() {
        if($('#media')!==null){
            if($('#media').get(0).paused){
                $('#media').get(0).play();
            }else{
               $('#media').get(0).pause();
            }
            $(this).toggleClass('play');
        }
    })

    var mySwiper = new Swiper('.swiper-container', {
        mode: 'vertical',
        // loop: true,
    })
})
