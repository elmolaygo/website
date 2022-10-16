const toggle = document.getElementById('toggle');
const sidebar = document.getElementById('sidebar')
const menubtn = document.getElementById('menu-btn');

toggle.onclick = function() {
    sidebar.classList.toggle('active')
    toggle.classList.toggle('active')
    menubtn.classList.toggle("fa-x")
}

console.log("I'll use FontAwesome someday so don't mind the link on top.")
console.log("I use Comfortaa and Orbitron as my UI fonts, and Noto Color Emoji for the Emojis.")

function facebook() {
    window.open("https://facebook.com/elmolaygo", "_blank")
}

function youtube() {
    window.open("https://youtube.com/channel/UCw_S5pkD-St3pzT8cJ4wG6Q", "_blank")
}

function twitter() {
    window.open("https://twitter.com/elmolaygo_", "_blank")
}

function discord() {
    window.open("https://discord.gg/invite/HMQgtZra5t","_blank")
}

function tiktok() {
    window.open("https://tiktok.com/@elmolaygo", "_blank")
}

function web() {
    window.open("https://elmolaygo-web.w3spaces.com")
}