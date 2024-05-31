document.getElementById("submit").onclick = function (){
    answers = document.getElementById("name").value

if(answers == `Sucrose`) {
    document.getElementById("TF").textContent = `Correct`
    document.location.href = `Q3M.html`
}
else if(answers == `sucrose`) {
    document.getElementById("TF").textContent = `Correct`
    document.location.href = `Q3M.html`
}
else (document.getElementById("TF").textContent = `Wrong`)
}