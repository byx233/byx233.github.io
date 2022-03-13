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
    body.onclick=(e)=>{
        var x=e.clientX;
        var y=e.clientY;
        var music_icon_mouse=document.createElement("img");
        music_icon_mouse.classList.add("music_icon_mouse");
        music_icon_mouse.setAttribute("src","img/music_icon.png");
        music_icon_mouse.setAttribute("style",(str="left")+":"+x+"px;top:"+y+"px;");
        if(Math.random()<0.5)x-=10;
        else x+=20;
        index_bg.append(music_icon_mouse);
        setTimeout(()=>{
            music_icon_mouse.setAttribute("style","left:"+x+"px;top:"+(y-=50)+"px;opacity:0;");
            setTimeout(()=>{
                music_icon_mouse.remove();
            },2000);
        },100);
    }
}