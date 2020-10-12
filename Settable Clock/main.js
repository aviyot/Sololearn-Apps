
function showhide(el,interavl){

    var show = false;
    
     return setInterval(function(){
         
         show = !show;
         if(show)
         el.style.visibility="hidden";
         else
         el.style.visibility = "visible";
         
        
     },interavl)
        
    }
    
    
    function format(val){
        if(val < 10)
         return "0"+val;
        
        return val;
    }
    
    function renderClock(hour,minute,second,adjet){
    
    let currentTime = new Date();
    
    let adjestedTime = new  Date(currentTime.getTime() + adjet);
    
    hour.textContent = format(adjestedTime.getHours());
    minute.textContent = format(adjestedTime.getMinutes());
    second.textContent = format(adjestedTime.getSeconds());
    
    }
    
    function renderClockInterval(interval){
        return setInterval(()=>{
        renderClock(hour,minute,second,interval);
    },100)
        
    }
    
    
    function getElement(el){
        
        return document.querySelector(el);
    }
    
    window.onload = () => {
    
    let selectedElement = null;
    let intervalRenderId = null;
    
    interval = 0;
    dif = 0;
    let hour =   getElement("#hour");
    let minute = getElement("#minute");
    let second = getElement("#second");
    let inc = getElement("#inc");
    let dec = getElement("#dec");
    let seting  = getElement("#set");
    
    let selectedItem = 0;
    
    seting.addEventListener("click",()=>{
    
    getElement("#inc").style.display="inline";
    getElement("#dec").style.display="inline"
        
        elements.forEach((el)=>{
              el.style.visibility = "visible";
        })
        if(selectedItem < elements.length){
             selectedElement = elements[selectedItem];
               setDif(selectedElement);
     
         
          if(intervalId !== null){
        clearInterval(intervalId);
        }
        
       
        intervalId = showhide(elements[selectedItem],500);
          selectedItem++;
        }
    
    else {
        clearInterval(intervalId);
        dif = 0;
        selectedItem = 0;
        getElement("#inc").style.display="none";
    getElement("#dec").style.display="none"
    }
    
        
    })
    
    intervalRenderId = renderClockInterval(interval);
    
    inc.addEventListener("click",()=>{
    clearInterval(intervalRenderId); 
      interval += dif;
      intervalRenderId =renderClockInterval(interval);
    })
    
    dec.addEventListener("click",()=>{
    clearInterval(intervalRenderId);
          interval -= dif;
      intervalRenderId =renderClockInterval(interval);
    })
    
    
    function setDif(el){
        
            if(el.id === "hour"){
              dif = 60*60*1000;
            }
        
        
            if(el.id === "minute"){
              dif = 60*1000;
            }
           
           
            if(el.id === "second"){
               dif = 1000;
            }
           
        
    }
    
    let intervalId = null;
    let elements = [hour,minute,second];
    elements.forEach((el)=>{
    
        el.addEventListener("click",()=>{
        
        selectedElement = el;
        
      setDif(selectedElement);
           
        
        getElement("#inc").style.display="inline";
    getElement("#dec").style.display="inline"
         
        elements.forEach((el)=>{
            el.style.visibility = "visible";
        })
        
       if(intervalId !== null){
        clearInterval(intervalId);
        }
        
        intervalId = showhide(el,500);
        
    })
    })
    
    }
    
    