let btn = document.querySelector("#btn");
let nav = document.querySelector(".nav");
let searchBtn = document.querySelector(".bx-search");
let logoutBtn = document.querySelector(".bx-log-out");
let logoutBtn2 = document.querySelector(".btnout2");

btn.onclick = function () {
    nav.classList.toggle("active");
}
searchBtn.onclick = function () {
    nav.classList.toggle("active");
}
logoutBtn.onclick = function () {
    location.assign("../../Đăng nhập/indexLogin.html");
}

logoutBtn2.onclick = function () {
    location.assign("../Đăng nhập/indexLogin.html");
}
