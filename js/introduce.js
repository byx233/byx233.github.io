window.onload=()=>{
    var broken_line_wall=document.getElementById("broken_line_wall");
    var broken_line_pos=new Array();
    var broken_line_run_fn=async function(floor){
        while(true){
            let broken_line=document.createElement("div");
            broken_line.classList.add("broken_line");
            let row=floor/100;
            let isSingle=((floor/100%2)==0);
            let during_time=(0.5+2*Math.random())*1000;
            let y=Math.random()*100;
            let length=during_time/run_speed;
            let width=Math.sqrt(Math.pow(length,2)+Math.pow(y-broken_line_pos[row],2));
            broken_line.style.width=width+"px";
            broken_line.style.top=floor+broken_line_pos[row]+"px";
            let degree;
            if(isSingle)broken_line.style.animationName="broken_line_run_single";
            else broken_line.style.animationName="broken_line_run_double";
            degree=Math.atan((y-broken_line_pos[row])/length)*180/Math.PI;
            broken_line.style.transform="rotate("+degree+"deg)";
            await new Promise(resolve=>setTimeout(resolve,during_time));
            broken_line_wall.appendChild(broken_line);
            broken_line_pos[row]=y;
            setTimeout(()=>broken_line.remove(),10000);
        }
    }
    var run_speed=10000/(document.body.clientWidth+800);//单位：ms/px
    for(let floor=0;floor<document.body.clientHeight;floor+=100){
        broken_line_pos.push(Math.random()*100);
        let y=broken_line_pos[floor/100].y;
        // console.log(broken_line_pos[floor/100]);
        for(let left=-400,all_time=0;all_time<10000;){
            let during_time=(1.5+2*Math.random())*1000;
            let broken_line=document.createElement("div");
            broken_line.classList.add("broken_line");
            // let left_new=Math.random()*400+left;
            if(floor/100%2==0)broken_line.style.animationName="broken_line_run_single";
            else broken_line.style.animationName="broken_line_run_double";
            let y_new=Math.random()*100;
            let width=Math.sqrt(Math.pow(during_time/run_speed,2)+Math.pow(y_new-y,2));
            // let width=run_speed*during_time;
            broken_line.style.width=width+"px";
            broken_line.style.top=floor+y+"px";
            broken_line.style.left=(all_time/run_speed)-400+"px";
            let degree=Math.atan((y_new-y)/(during_time/run_speed))*180/Math.PI;
            broken_line.style.transform="rotate("+degree+"deg)";
            broken_line_wall.appendChild(broken_line);
            // let time_remove=10*(left+400)/(document.body.clientWidth+400);
            broken_line.style.animationDelay=-all_time+"ms";
            setTimeout(()=>{
                broken_line.remove();
            },10000-all_time);
            // broken_line_run_fn(floor,broken_line);
            // left=left_new;
            y=y_new;
            all_time+=during_time;
        }
        broken_line_run_fn(floor);
    }
}