document.getElementById("submit").onclick = function (){
    answers = document.getElementById("name").value

if(answers == `Kaeya`) {
    document.getElementById("TF").textContent = `Correct`
    document.location.href = `Q9M.html`
}
else if(answers == `kaeya`) {
    document.getElementById("TF").textContent = `Correct`
    document.location.href = `Q9M.html`
}
else (document.getElementById("TF").textContent = `Wrong`)
}