// AVI G

window.onload = function(){
    
    num2.addEventListener("input",changeInputHandler)
    num1.addEventListener("input",changeInputHandler)
    /*
    
    
    */
     /*
    //displae massage to vote
    setTimeout(()=>{
        document.querySelector(".popup").style.display="block";
        //time out to hide message;
        setTimeout(()=>{    
       document.querySelector(".popup").style.display="none";
    }, 5000)
        
    }, 20000)
    
    */
    
    //attach event
    
    document.querySelector("#close").addEventListener("click",()=>{
        document.querySelector(".popup").style.display="none";
    })
    
    let signSec = document.querySelector("#sign");
    let form = document.querySelector("#form");
    
    form.addEventListener("submit",fn);
    
    form.addEventListener("reset",()=>{
    document.querySelector("#num1").focus();
     if(prev){
        prev.style.color = "black";
        }
    })
    
    let prev = null;
    
    
    //toggle bactive 
    function toogleActive(el){
    if(prev){
        prev.style.color = "black";
    }
    el.style.color = "red";
    prev = el;
        
    }
    
    function changeInputHandler(){
    let sign =  document.querySelector("#sign").value;
    let result = document.querySelector("#res");
        
    if(sign == "+"){
        result.value  = Number(num1.value) + Number(num2.value); 
        
        }
        
        if(sign == "-"){
       result.value = Number(num1.value) - Number(num2.value);
        
        }
        
           if(sign == "x"){
        result.value = Number(num1.value) * Number(num2.value);
        }
        
           if(sign == "/"){
        result.value= Number(num1.value) / Number(num2.value);
           }
    }
    
    function insertResult(){
        document.querySelector("#num1").value = document.querySelector("#res").value;
       document.querySelector("#num2").value = "";
     document.querySelector("#num2").focus();
       
    }
    //addEventListener
     document.querySelector("#his").addEventListener("click",insertResult);
    
    
    function fn(event){
    event.preventDefault();
    let num1 = document.querySelector("#num1");
    let num2 = document.querySelector("#num2");
    let sign = document.activeElement;
    let result = document.querySelector("#res");
    signSec.value = sign.innerHTML;
    
    
    toogleActive(sign);
    
    sign = sign.innerHTML;
    if(sign == "+"){
        result.value  = Number(num1.value) + Number(num2.value); 
        
        }
        
        if(sign == "-"){
       result.value = Number(num1.value) - Number(num2.value);
        
        }
        
           if(sign == "x"){
        result.value = Number(num1.value) * Number(num2.value);
        }
        
           if(sign == "/"){
        result.value= Number(num1.value) / Number(num2.value);
        }
        
    }
    }
    