$(function(){

    //ステージ（canvasのこと）を設定
    var stage = new createjs.Stage('canvasEL');

    //丸
    var ball = new createjs.Shape();
    ball.graphics.beginFill('#0000FF').drawCircle(0,0,40);
    ball.x = 100;
    ball.y = 100;
    stage.addChild(ball);

    //四角形　drawRect(x座標、Y座標、横幅、縦幅)
    var box = new createjs.Shape();
    box.graphics.beginFill('#cc0000').drawRect(0,0,50,50);
    box.x = 100;
    box.y = 200;
    ball.alpha = 0;//非表示にする
    stage.addChild(box);

    //四角をクリックを押したら動く
    box.addEventListener('click',function(){
        //アニメーション
        createjs.Tween.get(ball).to({alpha:1},1000).wait(1000).to({x:500},1000,createjs.Ease.bounceOut);
    })

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
