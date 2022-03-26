window.onload=()=>{
    var broken_line_wall=document.getElementById("broken_line_wall");
    // var broken_line_pos=new Array();
    var broken_line_run_fn=async function(floor){
        while(true){
            let broken_line=document.createElement("div");
            broken_line.classList.add("broken_line");
            let isSingle=((floor/100%2)==0);
            let during_time=(0.5+2*Math.random())*1000;
            let y=Math.random()*100;
            broken_line.style.top=floor+y+"px";
            if(isSingle){
                broken_line.style.animationName="broken_line_run_single";
            }else {
                broken_line.style.animationName="broken_line_run_double";
            }
            await new Promise(resolve=>setTimeout(resolve,during_time));
            broken_line_wall.appendChild(broken_line);
            setTimeout(()=>broken_line.remove(),10000);
        }
    }
    var run_speed=10000/(document.body.clientWidth+800);//单位：ms/px
    for(let floor=0;floor<document.body.clientHeight;floor+=100){
        broken_line_run_fn(floor);
    }
}