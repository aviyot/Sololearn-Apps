//AVI G
//by jquery


$(document).ready(function() {


    $("#close").click(()=>{
        $("#mask").hide();
    })
    const getAge = (date,nowDate)=>{
    
    const oneYearMilisecond = 3.1556926 * (10**10);
    const oneMonthMilisecond = 2.62974383 * (10**9);
    const oneDayMilisecond = 86400000;
    let rem = 0;
    
    let myAgeMil = nowDate.getTime() - date.getTime();
    
    let years = Math.floor(myAgeMil/oneYearMilisecond);
    
    rem = myAgeMil%oneYearMilisecond;
    let months = Math.floor(rem/oneMonthMilisecond);
    
    rem = rem % oneMonthMilisecond;
    let days = Math.floor(rem/oneDayMilisecond);
    
    
        return {years:years,
                months:months,
                days:days
        }
    }
        
        
    
    
    $("#enter-date").click(()=>{
        //$("#past-date").toggleClass('grid');
    })
    
    $(".exit").click(()=>{
        $(".age-info").addClass("d-none");
    })
    
    
    function showAge(age){
        $("#age").html(`<h4>Your Age Is </h4><li>Years: ${age.years}</li>
    <li>Months : ${age.months}</li>
    <li>Days : ${age.days}</li>`);
    }
    
    $("#cal").click(()=>{
    $(".age-info").removeClass("d-none");
        let y = Number($("#year").val());
    let m = Number($("#month").val());
    let d = Number($("#day").val());
    
    let date = new Date(y,m-1,d);
    let nowDate = new Date();
    
    const age = getAge(date,nowDate);
    showAge(age);
    })
    
    $("#cal-past").click(()=>{
    
    $(".age-info").removeClass("d-none");
    
    let y = Number($("#year").val());
    let m = Number($("#month").val());
    let d = Number($("#day").val());
    
    let py = Number($("#past-year").val());
    let pm = Number($("#past-month").val());
    let pd = Number($("#past-day").val());
    
    let date = new Date(y,m-1,d);
    let nowDate = new Date(py,pm-1,pd);
    
    const age = getAge(date,nowDate);
    showAge(age);
    
        })
    });
    
    
    