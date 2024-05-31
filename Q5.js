document.getElementById("submit").onclick = function (){
    answers = document.getElementById("name").value

if(answers == `Raiden`) {
    document.getElementById("TF").textContent = `Correct`
    document.location.href = `Q5M.html`
}
else if(answers == `raiden`) {
    document.getElementById("TF").textContent = `Correct`
    document.location.href = `Q5M.html`
}
else if(answers == `Ei`) {
    document.getElementById("TF").textContent = `Correct`
    document.location.href = `Q5M.html`
}
else if(answers == `ei`) {
    document.getElementById("TF").textContent = `Correct`
    document.location.href = `Q5M.html`
}
else (document.getElementById("TF").textContent = `Wrong`)
}