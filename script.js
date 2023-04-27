var settingmenu = document.querySelector(".settings-menu")

function settingsMenuToggle(){
settingmenu.classList.toggle("settings-menu-height")
}
var darkBtn = document.getElementById("dark-btn")
darkBtn.onclick = function(){
    darkBtn.classList.toggle("dark-btn-on");
    document.body.classList.toggle("dark-theme");
}
