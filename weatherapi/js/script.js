$(function(){
    //GPS情報を取得するスクリプト
    navigator.geolocation.getCurrentPosition(function(pos){
        var lat = pos.coords.latitude; //緯度
        var lon = pos.coords.longitude; //経度


        console.log(lat, lon);

        //APIキーは固定の値なので定数(const)で定義
        const apikey = '3f92de7ccc9be29797ad35eaae9d4944'

        //openweathermapのお天気情報のURL
        var url = 'http://api.openweathermap.org/data/2.5/weather?lat=' + lat +'&lon=' + lon + '&appid=' + apikey;

        $.ajax({
            url;
            dataType : 'json'
        }).done(function(data){

            console.log(data);

        }).fail(function(){

            console.log('ajax error!!');
        });

    });

});
