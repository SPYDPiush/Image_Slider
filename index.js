let flag=0;

slideshow(flag);

function slideshow(num){
    let slide=document.getElementsByClassName("slider")
    slide[num].style.display="block";
    let lnt=slide.length;
    let rht=document.getElementById("next");
    let lft=document.getElementById("prevv");
    lft.addEventListener('click',()=>{
        slide[num].style.display="none";
        num-=1
        if(num==-1){
            num=lnt-1;
        }
        slide[num].style.display="block";
    });
    rht.addEventListener('click',function(ele){
        slide[num].style.display="none"
        num+=1;
        if(num==lnt){
            num=0;
        }
        slide[num].style.display="block";
    });
};