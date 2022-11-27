

//Section5 javascript Starts ***************

const target = document.querySelector(".section5 .overflow");
const cursor = document.querySelector(".cursor");
const cursorPara = document.querySelector(".cursor p");
let inspiration = document.querySelector(".section5 .mainContainer.first");
let talk = document.getElementById("letTalk");

document.addEventListener("mousemove", cursorEffect);
//document.addEventListener("scroll", cursorEffect);
window.addEventListener("load", change);
target.addEventListener("mouseenter", mouseenter);
target.addEventListener("mouseleave", mouseLeave);
talk.addEventListener("mouseenter", talkEnter);
talk.addEventListener("mouseleave", talkLeave);

function talkEnter() {
    cursor.classList.add("scale");
    cursorPara.innerHTML = 'Click Me'
    cursorPara.style.display = "block";
    document.body.style.cursor = "none";
}
function talkLeave() {
    cursor.classList.remove("scale");
    cursorPara.innerHTML = 'Scroll Me'
    cursorPara.style.display = "none";
    cursorPara.style.cssText += 'transform:unset';
    document.body.style.cursor = "default";
}

function change() {

    // console.log(target, inspiration.getBoundingClientRect().height);
    let inspirationHeight = inspiration.getBoundingClientRect().height;
    target.style.height = `${inspirationHeight}px`;
}

function cursorEffect(e) {
    // console.log(e);
    cursor.style.left = `${e.pageX + 10}px`;
    cursor.style.top = `${e.pageY + 10}px`;
}

function mouseenter(e) {
    cursor.classList.add("scale");
    cursorPara.style.display = "block";
    console.log("mouseIn", cursorPara);
    document.body.style.cursor = "none";
}
function mouseLeave(e) {
    cursor.classList.remove("scale");
    cursorPara.style.display = "none";
    console.log("mouseleave", cursorPara);
    document.body.style.cursor = "default";
}


//Section5 javascript Ends ***************