var music_names=["《广陵散》","《高山流水》","《梅花三弄》","《春江花月夜》","《汉宫秋月》","《渔樵问答》","《胡笳十八拍》","《平沙落雁》","《十面埋伏》","《阳春白雪》"]
window.onload=()=>{
    var top_signin=document.getElementById("top_signin");
    var choose=document.getElementById("choose");
    top_signin.onclick=()=>{
        top_signin.classList.add("registering");
        choose.classList.add("registering");
    }
    top_signin.onmouseleave=()=>{
        top_signin.classList.remove("registering");
        choose.classList.remove("registering");
    }
    var index_bg=document.getElementById("index_bg");
    var body=document.getElementsByTagName("body")[0];
    // 鼠标点击生成音乐图标
    // body.onclick=(e)=>{
    //     var x=e.clientX;
    //     var y=e.clientY;
    //     var music_icon_mouse=document.createElement("img");
    //     music_icon_mouse.classList.add("music_icon_mouse");
    //     music_icon_mouse.setAttribute("src","img/music_icon.png");
    //     music_icon_mouse.setAttribute("style",(str="left")+":"+x+"px;top:"+y+"px;");
    //     if(Math.random()<0.5)x-=10;
    //     else x+=20;
    //     index_bg.append(music_icon_mouse);
    //     setTimeout(()=>{
    //         music_icon_mouse.setAttribute("style","left:"+x+"px;top:"+(y-=50)+"px;opacity:0;");
    //         setTimeout(()=>{
    //             music_icon_mouse.remove();
    //         },2000);
    //     },100);
    // }
    var canRipple=true;
    index_bg.onclick=click;
    document.getElementById("choose").onclick=click;
    var click=(e)=>{
        if(!canRipple)return;
        canRipple=false;
        var x=e.clientX;
        var y=e.clientY;
        var ripple=document.createElement("div");
        ripple.classList.add("ripple");
        ripple.setAttribute("style","top:"+y+"px;left:"+x+"px;");
        var div=document.createElement("div");
        div.setAttribute("style","position:fixed;width:100vw;height:100vh;");
        for(var i=0;i<6;i++){
            let p=document.createElement("p");
            p.classList.add("ripple_text");
            let top=(5+(i/3)*40+40*Math.random())*body.clientHeight/100;
            let left=(8+(i%3)*30+19*Math.random())*body.clientWidth/100;
            let d=Math.sqrt(Math.pow(Math.abs(y-top),2)+Math.pow(Math.abs(x-left),2));
            let delay=10/(1.5*body.offsetWidth)*d;
            delay=delay>=1?delay-1:delay;
            p.innerText=music_names[i];
            p.setAttribute("style","top:"+top+"px;left:"+left+"px;animation-delay:"+delay+"s;");
            index_bg.appendChild(p);
            setTimeout(()=>{
                p.remove();
            },1000*(delay+2));
            // console.log(x,y,left,top,d,body.clientWidth);
        }
        // ripple.append(div);
        index_bg.append(ripple);
        setTimeout(()=>{
            ripple.remove();
            canRipple=true;
        },10000);
    }
    // index_bg.onclick=click;
}