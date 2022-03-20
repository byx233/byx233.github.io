window.onload=()=>{
    var disc=document.getElementById("disc");
    var body=document.body;
    var body_height=body.clientHeight;
    for(var scale=1;scale>0.3;scale-=0.01){
        let line=document.createElement("div");
        line.classList.add("disc_line");
        line.style.transform="scale("+scale+")";
        disc.appendChild(line);
    }
    var playList=document.getElementById("playList");
    playList.onclick=()=>{
        playList.style.borderRadius=0;
        playList.style.height=playList.style.width=200+"px";
    }
}