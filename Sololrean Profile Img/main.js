window.onload = ()=>{


    //2098101
    var app = new Vue({ 
    
     el: '#app',
     
     data: {
        id:2098101,
        interval:null,
        random:false,
        showImg:false,
        startId:10000,
        endId:15000000,
        NAME:"",
        LEVEL:"",
        XP:"",
        ID:"",
        IMAGE:"",
         link:"https://www.sololearn.com/Profile/"+this.id+"2098101/?ref=app"
     },
     beforeMount(){
         this.id = this.startId  + Math.floor( Math.random()*this.endId);
     },
     
     beforeUpdate(){
     /*
     //console.log(this.$refs.img.width);
         if(this.$refs.img.width <= 16){
         console.log("exit");
            //this.stopInterval();
            // this.randomId();
         }
       */
     },
     mounted () { 
    /* axios.get("https://cors-anywhere.herokuapp.com/" + this.link).then(res => {
     
    this.NAME = res.data.split("title>")[1].split("&")[0];
    
    this.LEVEL = res.data.split("<label>Level</label>")[1].split("<")[0].replace(/\n/g, "").replace(" ","");
    
    this.XP = res.data.split("<label>Level</label>")[1].split("<span>")[1].split(" ")[0];
    
    this.ID = link.replace("/?ref=app","").split("e/")[1];
    this.IMAGE = "https://api.sololearn.com/Uploads/Avatars/" + ID + ".jpg";
         
         console.log(this.name);
     }) 
     
     */
     },
     
     methods:{
         nextId : function(){
             this.id++;
             if(this.interval)
               this.stopInterval();
         },
         prevId : function(){
             this.id--;
             if(this.interval)
               this.stopInterval();
             
         },
         
         loadImg:function(ev){
         
         this.showImg = true;
        
             
         },
         
         imgError:function(ev){
             this.showImg = false;
             
             if(this.random){
               this.stopInterval();
               this.randomId();
               }
               
              else {
                       this.id++;
                    }
         },
         stopInterval : function(){
             clearInterval(this.interval);
             this.random = false;
         },
         randomId:function(){
         this.random = true;
         this.interval = setInterval(()=>{
                      this.id =this.startId  + Math.floor( Math.random()*this.endId);
         },3000)
    
         }
         
     }
     })
     
    }