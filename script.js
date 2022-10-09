const toggle = document.getElementById('toggle');
const sidebar = document.getElementById('sidebar')

toggle.onclick = function() {
    sidebar.classList.toggle('active')
    toggle.classList.toggle('active')
}

console.log("I'll use FontAwesome someday so don't mind the link on top.")
console.log("I use Comfortaa and Orbitron as my UI fonts, and Noto Color Emoji for the Emojis.")
