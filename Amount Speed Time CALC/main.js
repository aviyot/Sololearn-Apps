var data = {
    amountEl:null,
    speedEl:null,
    timeEl:null,
    selectedCalc:'.amount'
}

window.onload = function(){

toogleElement(data.selectedCalc);
qs('#amountSelect').checked = true;

function calcSelect(op){
    if(op =='.amount')
       calAmount();
    if(op =='.speed')
      calSpeed()
    if(op =='.time')
       calTime()
}

data.amountEl = qs('.amount').addEventListener("input",()=>{

calcSelect(data.selectedCalc)
    
})

data.speedEl = qs('.speed').addEventListener("input",()=>{
    
    calcSelect(data.selectedCalc);
})
data.timeEl = qs('.time').addEventListener("input",()=>{

 calcSelect(data.selectedCalc)
})


    
}




function qs(q){
    return document.querySelector(q);
}

function getValue(elRef){
    return (+elRef.value)
}


function toogleElement(el){

var els = [".time",".speed",".amount"]

els.forEach((elItem)=>{
    if(elItem == el){
       data.selectedCalc = elItem;
       qs(el).style.order = 3;
       qs(el).style.disabled = true
       qs(elItem).style.marginTop = "1rem";
    }
    else
    {
    qs(elItem).style.order = 'initial';
    qs(elItem).style.disabled = false;
    qs(elItem).style.marginTop = "initial";
    
     }
})
    
}

function calAmount(){

toogleElement('.amount');
//qs('.label').textContent ="amount"
    qs("#amount").value = getValue(qs("#speed"))*getValue(qs("#time"))
}

function calSpeed(){
toogleElement('.speed');
//qs('.label').textContent ="speed"
        qs('#speed').value = getValue(qs("#amount"))/getValue(qs("#time"))
}
function calTime(){
toogleElement('.time')
//qs('.label').textContent ="time"
    qs('#time').value  = getValue(qs("#amount"))/getValue(qs("#speed"))
}