
let tl = gsap.timeline();

tl.to(".child:nth-child(1)",{x:100, duration: 1})
.to(".child:nth-child(2)",{y:100, duration: 2, ease:"bounce"}, "-=1")
.to(".child:nth-child(3)",{x:100, y:50, duration: 3}, "-=2");    

function reverseFunc(e){
    if(!tl.isActive()){
        tl.reversed() ? tl.play() : tl.reverse();
    }

}

const btn = document.querySelector('.btn');

btn.addEventListener('click', reverseFunc);
