
//@ aviGeta sololern

window.onload = function (){ 

    var items;
    var bolTog=true;
    var editBtn;
    var totalSum = 0;
    
    var addItem = document.getElementById("add");
    var item = document.getElementById("items");
        
    function addNewItem(){ 
    
    bolTog = true;
    var expenseDiv = 
        document.createElement("DIV");
        
    expenseDiv.setAttribute("class","ex");
    
        var newItem =    document.createElement("INPUT");
        newItem.setAttribute("type", "number");
        newItem.setAttribute("class","item");
        newItem.setAttribute("value","");
    newItem.setAttribute("placeholder","Amount");
     
       var nameItem =     document.createElement("INPUT");
        nameItem.setAttribute("type", "text");
        nameItem.setAttribute("class","data");
        nameItem.setAttribute("value","");
        nameItem.setAttribute("placeholder",
        "Expense");
        
        var editBtn = 
        document.createElement("BUTTON");
        editBtn.setAttribute("class","edit");
        editBtn.setAttribute("type","button");
        editBtn.innerHTML="&#8942";
        
    
        
        
        
        expenseDiv.appendChild(nameItem);
        expenseDiv.appendChild(newItem);
        expenseDiv.appendChild(editBtn);
        
        item.appendChild(expenseDiv);
        
        items=document.getElementsByClassName
        ("item");
        
        editBtn = document.getElementsByClassName("edit");
             
        
         
    for(var i = 0;i<items.length;i++){  items[i].addEventListener("input",sumExpenses);
    editBtn[i].addEventListener("click",
                             saveItem);
    
       }
        }
        
    for(var i = 0;i < 1 ; i++)
       addNewItem();
            
    addItem.addEventListener("click",
                             addNewItem);
                         
      
      
       
     function saveItem(event){
      
     
         var ct = event.currentTarget;
         
         /*
         var pn = ct.parentNode;
           for(var i = 0 ; i < (pn.childNodes.length);i++)
              alert(pn.childNodes[i].nodeName);
        */
        
        
        if(bolTog){
         ct.innerHTML="EDIT";
          
         ct.parentNode.childNodes[0].
         setAttribute("disabled","disabled");
         
        ct.parentNode.childNodes[1].
         setAttribute("disabled","disabled");
         bolTog=!bolTog;
         }
         else{
           ct.innerHTML="SAVE";
           ct.parentNode.childNodes[0].
         removeAttribute("disabled");
         
        ct.innerHTML="SAVE";
           ct.parentNode.childNodes[1].
         removeAttribute("disabled");
         
         bolTog=!bolTog
         
         }
        
         }
    function sumExpenses(){
    
     items = document.getElementsByClassName("item");
         
     for(var i =0;i<items.length;i++)
       totalSum += Number(items[i].value);
       
     document.getElementById("totalSum").
          innerHTML=totalSum;
          
      totalSum = 0; 
     }
     
    var add = document.getElementById("add");
    var itm = document.getElementById("items"); 
    //itm.addEventListener("input",changeWidth);
     
     function getData(){
         
     var expensesAmount = document.getElementsByClassName("item");
     
     var expeneseName = document.getElementsByClassName("data");
         
         
     }
     
     
    var btns = document.getElementById("btns");
    
     function changeWidth(){
         this.style.height="60%";
         this.style.top="20%";
         btns.style.height="15%";
         add.style.height="15%";
     }
     
     
    
    
    }