$(function(){
    // //加速度のイベント
    // window.addEventLister('devicemotion',shakeDevice);
    //
    //
    // function shakeDevice(evt){
    //     var x = evt.acceleration.x;
    //     var y = evt.acceleration.y;
    //     var z = evt.acceleration.z;
    //
    //     $('#device li').eq(0).text('加速度x: ' + x);
    //     $('#device li').eq(1).text('加速度y: ' + y);
    //     $('#device li').eq(2).text('加速度z: ' + z);
    // }
    //
    // if(Math.abs(x) > 15 || Math.abs(y) > 15 || Math.abs(z) > 15){
    //     $('#result').text('振ったよ');
    //
    // }

//傾き
window.addEventLister('deviceorientation',roteDevice);

function roteDevice(ent){
    //x軸
    var x =evt.beta;
    //Y軸
    var y =evt.gamma;
    //Z軸
    var z =evt.alpha;

    $('#device li').eq(0).text('傾きx: '+ x);
    $('#device li').eq(1).text('傾きy: '+ y);
    $('#device li').eq(2).text('傾きz: '+ z);
}

});
