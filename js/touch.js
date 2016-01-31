//DOMロード
$(function(){
//緯度経度
var lon;
var lat;

    //GPS
    navigator.geolocation.getCurrentPosition(function(evt){
        //緯度
        lon = evt.coords.longitude;
        //経度
        lat = evt.coords.langitude;
    },
    function(error){
        //エラーしたときに読み込む
        console.log('GPS取れなかった');
    });

    //タッチイベント
    $('#ball').on('touchstart',function(){
        $('#touchResult li').eq(0).text('touchstart したよ');
    });
    $('#ball').on('touchmove',function(){
        $('#touchResult li').eq(1).text('touchmove したよ');
    });
    $('#ball').on('touchend',function(){
        $('#touchResult li').eq(2).text('touchend したよ');
        $('#geo li').eq(0).text('緯度: '+ lon);
        $('#geo li').eq(1).text('経度: '+ lat);
    });

});
