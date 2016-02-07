//先読みするリスト（オブジェクトの中に画像をいれておく）
var manifest = [
    {src:'img/tomato.png'},
    {src:'img/pumpkin.png'},
    {src:'img/greenpepper.png'}
];

$(function(){

    //ステージ（canvasのこと）を設定
    var stage = new createjs.Stage('canvasEL');

    //loadQueue（ローディングの仕組みの設定）
    var loadQueue = new createjs.LoadQueue();
    loadQueue.loadManifest(manifest);//読み込み開始

    loadQueue.addEventListener('complete',function(){//読み込みスタート
        console.log('読み込み完了！');
    });

    //1秒間に何コマ動くかの指定（フレームレート）
    createjs.Ticker.setFPS(30);
    //無駄な稼働をさせないための指定
    createjs.Ticker.timingMode = createjs.Ticker.RAF_SYNCHED;

    //アニメーションの設定
    //Tickerイベントは、同じ処理を回す
    createjs.Ticker.addEventListener('tick',function(){
    //ステージの更新
    stage.update();
    });



});
