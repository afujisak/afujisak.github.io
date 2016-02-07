//先読みするリスト（オブジェクトの中に画像をいれておく）
var manifest = [
    {src:'img/calcium.png'},
    {src:'img/iron.png'},
    {src:'img/vitaminC.png'}
];

$(function(){

    //ステージ（canvasのこと）を設定
    var stage = new createjs.Stage('canvasEL');

    //loadQueue（ローディングの仕組みの設定）
    var loadQueue = new createjs.LoadQueue();
    loadQueue.loadManifest(manifest);//読み込み開始

    loadQueue.addEventListener('complete', function(){
        console.log('読み込み完了！');
        showVege();
    });

    function showVege(){
        //スプライトシートの設定
        var vcSprite = new createjs.SpriteSheet(vitaminCSprite);
        var VcSprite = new createjs.SpriteSheet(CalciumSprite);

        //スプライトの設定
        var vitaminC = new createjs.Sprite(vcSprite,'stand');
        stage.addChild(vitaminC);
        vitaminC.x = 150;
        vitaminC.y = 400;
        vitaminC.alpha = 0;

        var calucium = new createjs.Sprite(vcSprite,'stand');
        stage.addChild(calucium);
        calucium.x = 80;
        calucium.y = 200;
        calucium.alpha = 0;


        //ビタミンCのアニメーション
        createjs.Tween.get(vitaminC).to({alpha:1},500).wait(1000).call(vitaminCwalk).to({x:500},4000).call(vitaminCStand);
        //ビタミンCが歩く
        function vitaminCwalk(){
        vitaminC.gotoAndPlay('walk');
        }
        //ビタミンCが止まる
        function vitaminCStand(){
        vitaminC.gotoAndPlay('stand');
        }

        //カルシウムのアニメーション
        createjs.Tween.get(calucium).to({aplpha:1},500).wait(2000).call(caluciumwalk).to({x:500},4000).call(caluciumStand);
        //カルシウムが歩く
        function caluciumwalk(){
        calucium.gotoAndPlay('walk');
        }
        //カルシウムが止まる
        function caluciumStand(){
        calucium.gotoAndPlay('stand');
        }

        stage.update();

    };

    loadQueue.addEventListener('progress',function(evt){
        console.log(evt.progress); //読み込み状況 0～1（ローディング）
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
