function closeSidebar() {
    var sidebar = document.getElementById("sidebar");
    sidebar.classList.remove("opened")
    sidebar.classList.add("closed");
    var articles = document.getElementById("articles")
    articles.classList.remove("opened")
    articles.classList.add("closed")
    
    openBtnAdd()
}



function openBtnAdd(){
    var closeBtn = document.getElementById("close");
    let newBtn = document.createElement("button");
    newBtn.innerHTML= '<i class="fa-solid fa-arrow-right"></i>'
    newBtn.classList.add("btn")
    newBtn.id="open"
    newBtn.onclick = function(){openSideBar()};

    var navbar = document.getElementById("nav-menu");
    navbar.replaceChild(newBtn,closeBtn)
    
}
function openSideBar(){
    var sidebar = document.getElementById("sidebar");
    sidebar.classList.remove("closed");
    sidebar.classList.add("opened")
    var articles = document.getElementById("articles")
    articles.classList.remove("closed")
    articles.classList.add("opened")
    closeBtnAdd()
    
    

}
function closeBtnAdd(){
    let clsBtn = document.createElement("button");
    clsBtn.innerHTML= '<i class="fa-solid fa-arrow-left"></i>'
    clsBtn.classList.add("btn")
    clsBtn.id="close"
    
    clsBtn.onclick = function(){closeSidebar()}
    let openBtn= document.getElementById("open")
    var navbar = document.getElementById("nav-menu");
    navbar.replaceChild(clsBtn,openBtn)
}
