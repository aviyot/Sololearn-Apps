window.onload = ()=>{


    /*
    var colorNames = [
            {red:[123,133,200]},
            {blue:[120,45,100]}
            ];
    */
    
    var app = new Vue({ 
     el: '#app',
     data: {
         red:0,
         green:0,
         blue:0,
         step:16,
         
         checkStatus:{
             red:true,
             green:true,
             blue:true
         }
       //cn:colorNames 
        
     },
     methods:{
     incR:function(){
     if ((this.red + this.step) < 256) {
         if(this.red == 0)
           this.red += this.step - 1;
         else
           this.red += this.step;
      }
     },
     decR:function(){
         if(this.red < this.step)
             this.red = 0;
         else
            this.red -= this.step;
     },
    
      incG:function(){
      if ((this.green + this.step) < 256 ) {
      
         if(this.green == 0)
           this.green += this.step-1;
         else
           this.green += this.step;
           }
     },
     decG:function(){
         if(this.green < this.step)
           this.green = 0;
         else
           this.green -= this.step;
     },
     
      incB:function(){
      if ((this.blue + this.step) < 256) {
      
         if(this.blue == 0)
          this.blue += this.step-1;
         else
          this.blue += this.step;
          }
     },
     decB:function(){
           if(this.blue < this.step)
           this.blue = 0;
         else
           this.blue -= this.step;
     },
     incAll:function(){
     if(this.checkStatus.red)
         this.incR();
         
    if(this.checkStatus.green)
         this.incG();
         
       if(this.checkStatus.blue)  
         this.incB();
     },
     
     decAll:function(){
    
     if(this.checkStatus.red)
        this.decR();
        
     if(this.checkStatus.green)
       this.decG();
         
     if(this.checkStatus.blue)
       this.decB();
         
     },
     reset:function(){
         this.red  = 0;
         this.green = 0;
         this.blue = 0;
         this.step = 16;
         this.checkStatus.red = true;
         this.checkStatus.green = true;
         this.checkStatus.blue = true;
         
         
     },
     max:function(next){
         return  (next + this.step) > 256;
     },
     min:function(next){
         return (next  - this.step) < -1;
     },
     
     
     generateRandomColor:function(){
     
     let numOfSteps = 256/this.step +1;
     
     
     if(this.checkStatus.red){
        
         let red = Math.floor(Math.random()*numOfSteps )*this.step - 1;
           if(red   > -1)
            this.red = red ;
         else
           this.red = red + 1;
         }
         
          if(this.checkStatus.green){
       
         
         let green= Math.floor(Math.random()*numOfSteps)*this.step - 1;
           
        if(green   > -1)
            this.green = green;
         else
           this.green = green + 1;
         
         }
         
          if(this.checkStatus.blue){
       
          let blue= Math.floor(Math.random()*numOfSteps)*this.step - 1;
          
            if(blue > -1)
            this.blue= blue ;
          else
            this.blue = blue + 1;
           
          }
         
       
           
         
             
             
         
         
     }
     }
     })
     
     
    
    }