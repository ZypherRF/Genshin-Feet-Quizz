document.getElementById("submit").onclick = function (){
    answers = document.getElementById("name").value

if(answers == `Gorou`) {
    document.getElementById("TF").textContent = `Correct`
    document.location.href = `Q4M.html`
}
else if(answers == `gorou`) {
    document.getElementById("TF").textContent = `Correct`
    document.location.href = `Q4M.html`
}
else (document.getElementById("TF").textContent = `Wrong`)
}