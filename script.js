var circle = document.querySelector("#circle");
var frame = document.querySelector(".frame");


window.addEventListener("mousemove", function(dets){
    // console.log(dets.clientX, dets.clientY);
    // circle.style.transform =`translate(${dets.clientX}px, ${dets.clientY}px)`;

    gsap.to(circle, {
        x: dets.clientX,
        y: dets.clientY,
        duration: .2,
        ease: Expo
    })
})



frame.addEventListener("mousemove", function(dets){
    gsap.to(circle, {
        scale: 4
    })

    gsap.to(".frame span", {
        color: "#fff",
        duration: .4,
        y: "-5vw"
    })
})


frame.addEventListener("mouseleave", function(dets){
    gsap.to(circle, {
        scale: 1
    })
    
    gsap.to(".frame span", {
        color: "#000",
        duration: .4,
        y: "0"
    })
})