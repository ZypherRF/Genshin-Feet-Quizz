document.getElementById("submit").onclick = function (){
    answers = document.getElementById("name").value

if(answers == `Yanfei`) {
    document.getElementById("TF").textContent = `Correct`
    document.location.href = `Q1M.html`
}
else if(answers == `yanfei`) {
    document.getElementById("TF").textContent = `Correct`
    document.location.href = `Q1M.html`
}
else (document.getElementById("TF").textContent = `Wrong`)
}
