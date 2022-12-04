function setTextAnimationRed(delay, duration, strokeWidth, timingFunction, strokeColor, strokeColor2, repeat) {
    let paths = document.querySelectorAll(".title > svg > g > path.text")
    let mode = repeat ? 'infinite' : 'forwards'
    for (let i = 0; i < paths.length; i++) {
        const path = paths[i]
        const length = path.getTotalLength()
        path.style["stroke-dashoffset"] = `${length}px`
        path.style["stroke-dasharray"] = `${length}px`
        path.style["stroke-width"] = `${strokeWidth}px`
        path.style["stroke"] = `${strokeColor}`
        path.style["animation"] = `${duration}s svg-text-anim-red ${mode} ${timingFunction}`
        path.style["animation-delay"] = `${i * delay}s`
    }
    let paths2 = document.querySelectorAll(".title > svg > g > path.bracket")
    let mode2 = repeat ? 'infinite' : 'forwards'
    for (let i = 0; i < paths2.length; i++) {
        const path2 = paths2[i]
        const length2 = path2.getTotalLength()
        path2.style["stroke-dashoffset"] = `${length2}px`
        path2.style["stroke-dasharray"] = `${length2}px`
        path2.style["stroke-width"] = `${strokeWidth}px`
        path2.style["stroke"] = `${strokeColor2}`
        path2.style["animation"] = `${duration}s svg-text-anim-blue ${mode2} ${timingFunction}`
        path2.style["animation-delay"] = `${i * delay}s`
    }
}
setTextAnimationRed(1, 3, 1, 'linear', 'white', '#00B3B3', false)

$(window).scroll(() => {
    if (!$(window).scrollTop()) {
        $("header").removeClass("floating")
    } else {
        $("header").addClass("floating")
    }
})