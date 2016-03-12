//DOMの読み込み
$(function(){
    console.log('page_topのDOM読み込んだよ');
    $('.page_top img').hide();

    $('.page_top img').on('click',function(evt){

        console.log('クリックしたよ');
        console.log(evt);
        evt.preventDefault();//イベントの停止

        //htmlかbodyをアニメーションでスクロールしながらトップに戻る
        $('html,body').animate({scrollTop:0},500,'easeInOutCubic');

    });

    //スクロールイベント
    $(window).scroll(function(){
        var posY = $(this).scrollTop();
        // console.log(posY);
        if(posY > 800){
            $('.page_top img').show(300);
        }else if(posY < 800){
            $('.page_top img').hide(300);
        }
    });
});
