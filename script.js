function show()
{
    gsap.registerPlugin(ScrollTrigger);


const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#bg"),
  smooth: true
});
locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy("#bg", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, 
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  pinType: document.querySelector("#bg").style.transform ? "transform" : "fixed"
});
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

ScrollTrigger.refresh();
}
show();
gsap.to("#bottle",{
    scrollTrigger:{
       trigger:"#text h1",
       scroller:"#bg",
       start:"top 20%",
       scrub:1,
       delay:0.6,
    },
    rotate:"-15deg",
})
gsap.to("#bottle",{
    scrollTrigger:{
       trigger:"#page5-text h1",
       scroller:"#bg",
       start:"top 30%",
       scrub:2,
    },
    scale:0.5,
    opacity:0
})
gsap.to("#img3 img",{
    scrollTrigger:{
        trigger:"#page5",
        scroller:"#bg",
        start:"top 30%",
        scrub:2,
     },
     opacity:1
})
var tl=gsap.timeline();
tl.to(".img-btm-div",{
    scrollTrigger:{
        trigger:"#page5",
        scroller:"#bg",
        start:"top 30%",
        scrub:2,
     },
    delay:0.3,
    y:70,
    duration:1.5,
    stagger:1,
    ease:"bounce.in",
},"-=3")
.from(".img-btm-div",{
    scrollTrigger:{
        trigger:"#page5",
        scroller:"#bg",
        start:"top 30%",
        scrub:2,
     },
    y:70,
    duration:1,
    ease:"bounce.out",
    stagger:1

},"-=3")


