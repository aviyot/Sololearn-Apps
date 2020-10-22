/*
 by Avi G 

*/
window.onload = function(){

    var START_TIME = -7200000;
    var d = new Date(START_TIME);
    var lastLap = d;
    var interval;
    var stopTime = d;
    var clock = document.getElementById("clock");
    
    start();
    reset();
    stop();
    resume();
    lap();
    
    
    
    function printTime() {
    
        var hours = d.getHours();
        var mins = d.getMinutes();
        var secs = d.getSeconds();
        var milisec = d.getMilliseconds() / 10;
        
        
            if(hours<10){
                hours = "0" + hours;
            }
            if(mins<10){
                
                mins = "0" + mins;
            }
            if(secs<10){
    
                secs = "0" + secs;
            }
             
             
             if(milisec < 10){
                 milisec  = "0"+milisec
             }
              
              /*
              if(milisec > 1000){
                  milisec = "999"
              }
              
              if(milisec < 100){
                  milisec = "0"+milisec
              }
              */
    
     clock.innerHTML =`${mins}:${secs}:${milisec}`;
     
     d = new Date(d.getTime() + 60);
    }
    
    
    function start(){
    
    document.getElementById("start").addEventListener("click",()=>{
        d = new Date(START_TIME);
        interval = startInterval(printTime,d)
    })
        
    }
    
    function reset(){
    document.getElementById("reset").addEventListener("click",()=>{
        d = new Date(START_TIME);
        stopTime = d;
        lastLap = d;
        printTime();
        document.getElementById("laplist").innerHTML ="";
    })
    
    }
    
    function stop(intervl){
        document.getElementById("stop").addEventListener("click",()=>{
            stopTime = d;
            clearInterval(interval);
        })
    }
    
    
    function resume(){
    document.getElementById("resume").addEventListener("click",()=>{
    interval =  startInterval(printTime,stopTime);
        
    })
    }
    
    function lap(){
    
    
    document.getElementById("lap").addEventListener("click",()=>{
    
    document.getElementById("laplist").innerHTML += `<li>
    ${format(lastLap.getMinutes())}:${format(lastLap.getSeconds())}:${format(lastLap.getMilliseconds())} :
    ${format(d.getMinutes())}:${format(d.getSeconds())}:${format(d.getMilliseconds())} 
    </li>
    `;
        
    lastLap = d;
    })
        
    }
    
    function startInterval(interval,time){
         clearInterval(window.interval)
         d = time;
        return setInterval(interval,60)
    }
    
    
    function format(val){
        if(val < 10){
            return "0"+val;
        }
        return val
    }
    
    }