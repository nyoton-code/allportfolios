let load = document.querySelector(".loading");
let all = document.querySelector(".all");
setTimeout(() => {
    document.body.style.backgroundColor = "unset";
    all.style.display = "block";
    all.style.opacity = "1";
    all.style.overflow = "visible";
    load.remove();
}, 2500);