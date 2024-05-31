document.getElementById("submit").onclick = function (){
    answers = document.getElementById("name").value

if(answers == `Albedo`) {
    document.getElementById("TF").textContent = `Correct`
    document.location.href = `Q10M.html`
}
else if(answers == `albedo`) {
    document.getElementById("TF").textContent = `Correct`
    document.location.href = `Q10M.html`
}
else (document.getElementById("TF").textContent = `Wrong`)
}