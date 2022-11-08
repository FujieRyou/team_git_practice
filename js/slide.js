const slideItem = document.querySelectorAll(".slideItem")
console.log(slideItem);

let num = 0;
setInterval(()=>{
    if(num < 4){
        slideItem[num].style.opacity = 0;
        slideItem[num+1].style.opacity = 1;
    }else if(num = 4){
        slideItem[4].style.opacity = 0;
        slideItem[0].style.opacity = 1;
        num = 0;
    }
    num = num+1
},1000)

