document.getElementById("submit").onclick = function (){
    answers = document.getElementById("name").value

if(answers == `Paimon`) {
    document.getElementById("TF").textContent = `Correct`
    document.location.href = `Q8M.html`
}
else if(answers == `paimon`) {
    document.getElementById("TF").textContent = `Correct`
    document.location.href = `Q8M.html`
}
else (document.getElementById("TF").textContent = `Wrong`)
}