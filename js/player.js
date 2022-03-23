window.onload=()=>{
    var disc=document.getElementById("disc");
    var bg=document.getElementById("bg");
    var body=document.body;
    var body_height=body.clientHeight;
    for(var scale=1;scale>0.3;scale-=0.01){
        let line=document.createElement("div");
        line.classList.add("disc_line");
        line.style.transform="scale("+scale+")";
        disc.appendChild(line);
    }
    var playList=document.getElementById("playList");
    var playList_click_fn=(e)=>{
        playList.classList.add("active");
    }
    var playList_close=playList.getElementsByClassName("close")[0];
    playList_close.onclick=(e)=>{
        playList.classList.remove("active");
        e.stopPropagation();
    }
    var playList_hasMove=true;
    playList.onmousedown=(e)=>{
        console.log("mousedown",e);
        playList_hasMove=false;
        document.onmousemove=(e)=>{
            console.log("moving");
            playList.style.top=e.clientY+"px";
            playList.style.left=e.clientX+"px";
            playList_hasMove=true;
        }
    }
    document.onmouseup=(e)=>{
        console.log("leaving");
        document.onmousemove=null;
        if(playList_hasMove==false)playList_click_fn();
        playList_hasMove=true;
    }
    //背景——球——运动
    var ball_wall=document.getElementById("ball_wall");
    var ball_fn=(ball)=>{
        ball.style.top=Math.random()*body.clientHeight+"px";
        ball.style.left=Math.random()*body.clientWidth+"px";
        var c=Math.random()*0.4+1.2;
        ball.style.transform="scale("+c+")";
        let dur=3+6*Math.random();
        ball.style.transitionDuration=dur+"s";
        setTimeout(()=>{ball_fn(ball)},dur*1000);
    }
    for(var i=0;i<7;i++){
        let ball=document.createElement("div");
        ball.classList.add("ball_blur");
        // ball.style.top=Math.random()*body.clientHeight+"px";
        // ball.style.left=Math.random()*body.clientWidth+"px";
        ball_wall.appendChild(ball);
        setTimeout(()=>{
            ball_fn(ball);
        },300);
    }
}