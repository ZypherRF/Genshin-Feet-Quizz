document.getElementById("submit").onclick = function (){
    player = document.getElementById("name").value
    document.getElementById("h1").textContent = `Welcome ${player} to Guess The Character (Genshin Impact)`
}

