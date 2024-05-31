document.getElementById("submit").onclick = function (){
    answers = document.getElementById("name").value

if(answers == `Childe`) {
    document.getElementById("TF").textContent = `Correct`
    document.location.href = `Q7M.html`
}
else if(answers == `childe`) {
    document.getElementById("TF").textContent = `Correct`
    document.location.href = `Q7M.html`
}
else if(answers == `Tartaglia`) {
    document.getElementById("TF").textContent = `Correct`
    document.location.href = `Q7M.html`
}
else if(answers == `tartaglia`) {
    document.getElementById("TF").textContent = `Correct`
    document.location.href = `Q7M.html`
}
else (document.getElementById("TF").textContent = `Wrong`)
}