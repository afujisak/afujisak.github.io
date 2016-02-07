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
            url:url,
            dataType: 'json'
        }).done(function(data){

            showWeather(data);

        }).fail(function(){

            console.log('ajax error!!');
        });

        //htmlに表示する関数
        function showWeather(data){
            console.log(data);

            //地域名
            var areaName = data.name;
            $('#areaName').text(areaName);

            //気温
            var areaTemp = data.main.temp;//華氏
            areaTemp = areaTemp - 273.15;
            $('#areaTemp').text(Math.round(areaTemp) + '度');

            //湿度
            var areaHumidity = data.main.humidity;
            $('#areaHumidity').text(areaHumidity + '%');

            //天気
            var areaWeather = data.weather[0].description;
            $('#areaweather').text(areaWeather);

            //天気アイコン
            var weatherIcon = 'http://openweathermap.org/img/w/'+ data.weather[0].icon + '.png';
            $('#weatherIcon').append('<img src="'+ weatherIcon + '">');

        }


    });

});
