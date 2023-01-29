var preloader = document.querySelector(".preloader")

function done(){
    preloader.style.display = "none"
}


function onPageLoad() {
    setTimeout(() => {
    done()
    }, 1000)
}
