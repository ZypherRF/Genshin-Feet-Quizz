document.getElementById("submit").onclick = function (){
    answers = document.getElementById("name").value

if(answers == `Klee`) {
    document.getElementById("TF").textContent = `Correct`
    document.location.href = `Q6M.html`
}
else if(answers == `klee`) {
    document.getElementById("TF").textContent = `Correct`
    document.location.href = `Q6M.html`
}
else (document.getElementById("TF").textContent = `Wrong`)
}