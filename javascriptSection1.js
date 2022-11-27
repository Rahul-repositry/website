

///WINDOW CONTENT CHANGINGN


let topSlides = Array.from(document.querySelectorAll('.top-slide'))
let rightSlides = Array.from(document.querySelectorAll('.right-slide'))
let leftSlides = Array.from(document.querySelectorAll('.left-slide'))
let fade_up_array = [...topSlides, ...rightSlides, ...leftSlides]

window.addEventListener('scroll', throttle(slideTop, 50))

function slideTop(e) {
    // console.count(e)
    fade_up_array.forEach((element) => {
        if (isVisible(element) && element.classList.contains('left-slide')) {
            element.classList.add('slide-left')
        }
        else if (isVisible(element) && element.classList.contains('right-slide')) {
            element.classList.add('slide-right')
        }
        else if (isVisible(element) && element.classList.contains('top-slide')) {
            element.classList.add('slide-top')
        } else {
            element.classList.remove('slide-top')
            element.classList.remove('slide-right')
            element.classList.remove('slide-left')
        }
    })


    function isVisible(Element) {
        let elementFromTop = Element.getBoundingClientRect().top
        let show = -300
        return elementFromTop - window.innerHeight < show ? true : false;
    }
}

function throttle(fn, delay) {
    let pastTime = 0
    // console.log(pastTime)
    return (...args) => {
        // console.log(pastTime)
        let context = this;
        // console.log(context, args)
        let currentTime = new Date().getTime()
        if (currentTime - pastTime < delay) {
            return
        }
        pastTime = currentTime
        // console.log(pastTime, currentTime)

        fn.apply(context, ...args)
    }
}


/// SECTION 1 


// MAIN CONTENT CHANGING
const elts = {
    text1: document.getElementById("text1"),
    text2: document.getElementById("text2")
};

const texts = [
    "YOUR",
    "SEARCH",
    "FOR",
    "BEST",
    "SCHOOL",
    "ENDS",
    "WITH US",
    "😌",
];

const morphTime = 1.75;
const cooldownTime = .75;

let textIndex = texts.length - 1;
let time = new Date();
let morph = 0;
let cooldown = cooldownTime;

elts.text1.textContent = texts[textIndex % texts.length];
elts.text2.textContent = texts[(textIndex + 1) % texts.length];
console.log(elts)

function doMorph() {
    morph -= cooldown;
    cooldown = 0;

    let fraction = morph / morphTime;

    if (fraction > 1) {
        cooldown = cooldownTime;
        fraction = 1;
    }

    setMorph(fraction);
}

function setMorph(fraction) {
    elts.text2.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
    elts.text2.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;

    fraction = 1 - fraction;
    elts.text1.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
    elts.text1.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;

    elts.text1.textContent = texts[textIndex % texts.length];
    elts.text2.textContent = texts[(textIndex + 1) % texts.length];
}

function doCooldown() {
    morph = 0;

    elts.text2.style.filter = "";
    elts.text2.style.opacity = "100%";

    elts.text1.style.filter = "";
    elts.text1.style.opacity = "0%";
}

function animate() {
    requestAnimationFrame(animate);

    let newTime = new Date();
    let shouldIncrementIndex = cooldown > 0;
    let dt = (newTime - time) / 1000;
    time = newTime;

    cooldown -= dt;

    if (cooldown <= 0) {
        if (shouldIncrementIndex) {
            textIndex++;
        }

        doMorph();
    } else {
        doCooldown();
    }
}

animate();

// MAIN CONTENT CHANGING END 

