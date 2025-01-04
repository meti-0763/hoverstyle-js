let elems = document.querySelectorAll("a[href='https://github.com/meti-0763']")
let anim = document.querySelector(".anim")

elems.forEach(element => {
    element.addEventListener("mouseenter",(ev)=>{
        anim.style=`left:${ev.target.offsetLeft}px`
        anim.style.width = `${ev.target.offsetWidth}px`;  
    })
});
