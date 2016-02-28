
$(function(){
    console.log('DOM読み込んだよ');

    //プルダウンメニュー
    var flag = false;

        $('#menu li').on('click',function(){
            // console.log(this);
        if(flag == false){
            $('ul.submenu',this).slideDown();
            flag = true;
        }
        else if(flag == true){
            $('ul.submenu',this).slideUp();
            flag = false;
        }

        });

});
