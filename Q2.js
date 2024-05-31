document.getElementById("submit").onclick = function (){
    answers = document.getElementById("name").value

if(answers == `Itto`) {
    document.getElementById("TF").textContent = `Correct`
    document.location.href = `Q2M.html`
}
else if(answers == `itto`) {
    document.getElementById("TF").textContent = `Correct`
    document.location.href = `Q2M.html`
}
else if(answers == `arataki`) {
    document.getElementById("TF").textContent = `Correct`
    document.location.href = `Q2M.html`
}
else if(answers == `Arataki`) {
    document.getElementById("TF").textContent = `Correct`
    document.location.href = `Q2M.html`
}
else (document.getElementById("TF").textContent = `Wrong`)
}