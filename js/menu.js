
$(function(){
    console.log('DOM読み込んだよ');

        $('#menu li').hover(function(){
            $(this).children('ul').show();
        },function(){
            $(this).children('ul').hide();
        });

});
